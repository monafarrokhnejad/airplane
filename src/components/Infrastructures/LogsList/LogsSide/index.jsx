import PropTypes from "prop-types";
import MainTab from "../../../Hybrid/MainTab";
import { putRequestToServer } from "../../../../services";
import { IS_LOG_SEEN_API } from "../../../../utilities/api";
import LogDetailTab from "./LogDetailTab";
import CommentTab from "./CommentTab";
import { useEffect } from "react";
import HistoryTab from "./HistoryTab";

const data = (dataDetail) => {
  return [
    {
      id: 0,
      label: "Log Detail",
      body: <LogDetailTab {...dataDetail} />,
    },
    {
      id: 1,
      label: "Comments",
      body: <CommentTab {...dataDetail} />,
    },
    {
      id: 2,
      label: "History",
      body: <HistoryTab {...dataDetail} />,
    },
  ];
};

const LogsDetail = ({ dataDetail, onAfterSubmit }) => {
  const { id, isSeen } = dataDetail;

  useEffect(() => {
    if (!isSeen) {
      const asyncFn = async () => {
        await putRequestToServer({
          address: `${IS_LOG_SEEN_API}/${id}`,
          dataEntry: {
            isSeen: true,
          },
        });
      };
      asyncFn();
      return () => onAfterSubmit();
    }
  }, [id, isSeen]);

  return <MainTab data={data(dataDetail)} sx={{ paddingTop: 3 }} />;
};
export default LogsDetail;
LogsDetail.propTypes = {
  dataDetail: PropTypes.object,
  onAfterSubmit: PropTypes.func,
};
