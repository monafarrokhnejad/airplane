import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { LOS_ANGELES_ZONE, convertTime } from "~/helper/dateMoment";
import { postRequestToServer } from "~/services";
import { GET_LOG_API } from "~/utilities/api";

export const useLogsList = ({ page = 0, pageSize = 10 }) => {
  const pageName = location?.pathname.slice(1);
  const isDashboardGrid = pageName.includes("dashboard");
  const params = new URLSearchParams(window.location.search);
  const search = useSelector((state) => state.logs.search);
  const { startDate, endDate } = useSelector((state) => state.logs.logsFilter);

  const res = useQuery({
    queryKey: [
      "logsList",
      page,
      pageSize,
      search,
      convertTime({ date: startDate, timeZone: LOS_ANGELES_ZONE, format: null }),
      convertTime({ date: endDate, timeZone: LOS_ANGELES_ZONE, format: null }),
      Number(params.get("id")),
      params.get("status"),
      params.get("customer"),
      params.get("userId"),
      params.get("versionNo"),
      params.get("application"),
      params.get("host"),
      params.get("path"),
      params.get("isSeen") ? Number(params.get("isSeen")) : 2,
      params.get("isFixed") ? Number(params.get("isFixed")) : 2,
      isDashboardGrid ? 1 : params.get("hasJiraLink") ? Number(params.get("hasJiraLink")) : 2,
    ],
    queryFn: () =>
      postRequestToServer({
        address: GET_LOG_API,
        dataEntry: {
          pageNumber: page + 1,
          pageSize,
          search,
          id: Number(params.get("id")),
          startDate: convertTime({ date: startDate, timeZone: LOS_ANGELES_ZONE, format: null }),
          endDate: convertTime({ date: endDate, timeZone: LOS_ANGELES_ZONE, format: null }),
          status: params.get("status") || "",
          customer: params.get("customer") || "",
          userId: params.get("userId") || "",
          versionNo: params.get("versionNo") || "",
          application: params.get("application") || "",
          host: params.get("host") || "",
          path: params.get("path") || "",
          isSeen: params.get("isSeen") ? Number(params.get("isSeen")) : 2,
          isFixed: params.get("isFixed") ? Number(params.get("isFixed")) : 2,
          hasJiraLink: isDashboardGrid ? 1 : params.get("hasJiraLink") ? Number(params.get("hasJiraLink")) : 2,
        },
      }),
    staleTime: 100000,
    cacheTime: 100000,
  });
  return res;
};
