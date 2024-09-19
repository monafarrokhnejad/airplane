import { useQuery } from "@tanstack/react-query";
import { getRequestFromServer } from "~/services";
import { GET_USER_INFO_API } from "~/utilities/api";

export const useUserInfo = () => {
  const queryKey = ["userInfo"];
  const res = useQuery({
    queryKey,
    queryFn: () =>
      getRequestFromServer({
        address: GET_USER_INFO_API,
      }),
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  return { ...res, queryKey };
};
