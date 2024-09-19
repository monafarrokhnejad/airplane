import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersFilter: {
    userName: "",
    isActive: 2,
    isAdmin: 2,
  },
};

export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersFilter: (state, action) => {
      state.usersFilter = action.payload;
    },
  },
});

export const { setUsersFilter } = UsersSlice.actions;

export default UsersSlice.reducer;
