import { statusCode } from "~/utilities/statusCode";
import { convertTime } from "~/helper/dateMoment";
import { isNullOrUndefined } from "~/helper/generalHelper";

const NULL = "null";

export const convertLogsDetailData = ({ item, dataDetail }) => {
  const isEmpty = isNullOrUndefined(dataDetail[item]) || dataDetail[item] === "";

  const data = {
    id: {
      title: "ID",
      desc: isEmpty ? NULL : dataDetail[item],
    },
    exceptionMessage: {
      title: "Exception Message",
      desc: isEmpty ? NULL : dataDetail[item],
    },
    exeptionData: {
      title: "Exception Data",
      desc: isEmpty ? NULL : dataDetail[item],
    },
    logDate: {
      title: "Log Date",
      desc: isEmpty ? NULL : convertTime({ date: dataDetail[item] }),
    },
    commentCount: {
      title: "Comment",
      desc: isEmpty ? NULL : dataDetail[item],
    },
    isSeen: {
      title: "Seen",
      desc: isEmpty ? NULL : dataDetail[item] === true ? "yes" : "No",
    },
    userId: {
      title: "User",
      desc: isEmpty ? NULL : dataDetail[item],
    },
    isFixed: {
      title: "Fixed",
      desc: isEmpty ? NULL : dataDetail[item] === true ? "yes" : "No",
    },
    versionNo: {
      title: "Version Number",
      desc: isEmpty ? NULL : dataDetail[item],
    },
    status: {
      title: "Status",
      desc: isEmpty ? NULL : statusCode[dataDetail.status].label,
    },
    jiraLink: {
      title: "Jira",
      desc: isEmpty ? NULL : dataDetail[item],
    },
    requestDetail: {
      title: "Request Detail",
      desc: isEmpty ? NULL : dataDetail[item],
    },
    stackTrace: {
      title: "Stack Trace",
      desc: isEmpty ? NULL : dataDetail[item],
    },
    userIP: {
      title: "IP",
      desc: isEmpty ? NULL : dataDetail[item],
    },
  };
  return (
    data[item] ?? {
      title: item,
      desc: isEmpty ? NULL : dataDetail[item],
    }
  );
};
