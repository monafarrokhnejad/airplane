import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { postRequestToServer } from "~/services";
import { GET_USERS_API } from "~/utilities/api";

export const useUsersList = ({ page = 0, pageSize = 10 }) => {
  const { userName, isActive, isAdmin } = useSelector((state) => state.users.usersFilter);
  const queryKey = ["usersList", page, pageSize, userName, isActive, isAdmin];
  const res = useQuery({
    queryKey,
    queryFn: () =>
      postRequestToServer({
        address: GET_USERS_API,
        dataEntry: {
          userName,
          isAdmin,
          isActive,
          pageNumber: page + 1,
          pageSize,
        },
      }),
    staleTime: 100000,
    cacheTime: 100000,
  });
  return { ...res, queryKey };
};
