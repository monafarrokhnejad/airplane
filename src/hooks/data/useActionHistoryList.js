import { useQuery } from "@tanstack/react-query";
import { postRequestToServer } from "~/services";
import { GET_ACTION_HISTORY_API } from "~/utilities/api";

export const useActionHistoryList = ({ page = 0, pageSize = 1000, logId }) => {
  const res = useQuery({
    queryKey: ["commentsList", page, pageSize, logId],
    queryFn: () =>
      postRequestToServer({
        address: GET_ACTION_HISTORY_API,
        dataEntry: {
          logId,
          pageNumber: page + 1,
          pageSize,
        },
      }),
  });
  return res;
};
