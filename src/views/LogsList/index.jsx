import { useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { MainDataGrid } from "../../components/Hybrid/MainDataGrid";
import TopBar from "../../layouts/TopBar";
import DetailBar from "../../layouts/DetailBar";
import { columnDefs } from "./columnDefs";
import LogsDetail from "../../components/Infrastructures/LogsList/LogsSide";
import ToolsBar from "./ToolsBar";
import { useLogsList } from "~/hooks/data/useLogsList";
import { Typography, useTheme } from "@mui/material";
import { postRequestToServer } from "~/services";
import { GET_LOG_API } from "~/utilities/api";
import { isEmptyObject } from "~/helper/generalHelper";
import { queryClient } from "~/utilities/queryClient";

const LogsList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const gridRef = useRef();
  const theme = useTheme();
  const [isOpen] = useOutletContext();

  const [dataDetail, setDataDetail] = useState({});
  const [maxWidthDEtailBar, setMaxWidthDEtailBar] = useState(false);

  const onRowDoubleClick = (e) => {
    setDataDetail?.(e?.row);
    navigate(`/logs/${e?.row?.id}${window.location.search}`);
  };
  const onAfterSubmit = () => {
    gridRef.current.refetch();
    queryClient.invalidateQueries({
      queryKey: ["statusByCustomer"],
    });
    queryClient.invalidateQueries({
      queryKey: ["statusByDate"],
    });
    queryClient.invalidateQueries({
      queryKey: ["status"],
    });
  };

  useEffect(() => {
    if (id) {
      const asyncFn = async () => {
        const response = await postRequestToServer({
          address: GET_LOG_API,
          dataEntry: {
            id,
            status: "",
            pageNumber: 1,
            pageSize: 1,
          },
        });
        setDataDetail(response?.data?.data?.[0] ?? {});
      };
      asyncFn();
      setMaxWidthDEtailBar(true);
    }
  }, []);

  return (
    <>
      <TopBar title="Logs" component={<ToolsBar />} />
      <MainDataGrid
        columns={columnDefs({
          onRowDoubleClick,
          onAfterSubmit,
        })}
        useDataSource={useLogsList}
        onRowDoubleClick={onRowDoubleClick}
        ref={gridRef}
        sx={{
          "& .super-app-theme--cell": {
            visibility: "hidden",
            backgroundColor: theme.palette.neutral[200],
            borderBottom: "none !important",
            padding: 0,
          },
          "& .super-app-theme--header": {
            borderBottom: "none !important",
            backgroundColor: theme.palette.neutral[200],
          },
        }}
      />
      <DetailBar
        isSideOpen={isOpen}
        isOpen={id ? true : false}
        onClose={() => navigate(`/logs${window.location.search}`)}
        dataDetail={dataDetail}
        anchor="right"
        maxWidthDEtailBar={maxWidthDEtailBar}
        setMaxWidthDEtailBar={setMaxWidthDEtailBar}
        component={
          !isEmptyObject(dataDetail) ? (
            <LogsDetail onAfterSubmit={onAfterSubmit} dataDetail={dataDetail} />
          ) : (
            <Typography variant="h1">This record does not exist</Typography>
          )
        }
      />
    </>
  );
};

export default LogsList;
