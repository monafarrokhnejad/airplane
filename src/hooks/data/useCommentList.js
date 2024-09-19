import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { postRequestToServer } from "~/services";
import { GET_COMMENTS_API } from "~/utilities/api";

export const useCommentList = ({ page = 0, pageSize = 1000, logId }) => {
  const { userId, comment, startDate, endDate } = useSelector((state) => state.comments.commentsFilter);
  const res = useQuery({
    queryKey: ["commentsList", page, pageSize, logId, userId, comment, startDate, endDate],
    queryFn: () =>
      postRequestToServer({
        address: GET_COMMENTS_API,
        dataEntry: {
          logId,
          userId,
          comment,
          startDate,
          endDate,
          pageNumber: page + 1,
          pageSize,
        },
      }),
  });
  return res;
};
