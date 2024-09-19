import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commentsFilter: {
    userId: 0,
    comment: "",
    startDate: null,
    endDate: null,
  },
};

export const CommentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setCommentFilter: (state, action) => {
      state.commentsFilter = action.payload;
    },
  },
});

export const { setCommentFilter } = CommentsSlice.actions;

export default CommentsSlice.reducer;
