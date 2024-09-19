import { useQuery } from "@tanstack/react-query";
import { getRequestFromServer } from "~/services";
import { GET_STATUS_COMBO } from "~/utilities/api";

export const useStatusCombo = () => {
  const queryKey = ["statusCombo"];
  const res = useQuery({
    queryKey,
    queryFn: () =>
      getRequestFromServer({
        address: GET_STATUS_COMBO,
      }),
    staleTime: 100000,
    cacheTime: 100000,
  });
  return res;
};
