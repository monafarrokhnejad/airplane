import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { LOS_ANGELES_ZONE, convertTime } from "~/helper/dateMoment";
import { postRequestToServer } from "~/services";
import { LOG_STATUS_BY_DATE_CHART } from "~/utilities/api";

export const useStatusByDateChart = () => {
  const { startDate, endDate } = useSelector((state) => state.logs.logsFilter);

  const res = useQuery({
    queryKey: [
      "statusByDate",
      convertTime({ date: startDate, timeZone: LOS_ANGELES_ZONE, format: null }),
      convertTime({ date: endDate, timeZone: LOS_ANGELES_ZONE, format: null }),
    ],
    queryFn: () =>
      postRequestToServer({
        address: LOG_STATUS_BY_DATE_CHART,
        dataEntry: {
          startDate: convertTime({ date: startDate, timeZone: LOS_ANGELES_ZONE, format: null }),
          endDate: convertTime({ date: endDate, timeZone: LOS_ANGELES_ZONE, format: null }),
        },
      }),
    staleTime: 100000,
    cacheTime: 100000,
  });
  return res;
};
