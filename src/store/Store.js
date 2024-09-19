import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./users/UsersSlice";
import LogsReducer from "./logsList/LogsSlice";
import CommentsReducer from "./comments/CommentsSlice";

export const store = configureStore({
  reducer: {
    users: UsersReducer,
    logs: LogsReducer,
    comments: CommentsReducer,
  },
});

export default store;
