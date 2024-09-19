import { createSlice } from "@reduxjs/toolkit";
import { getStorage } from "~/helper/appManager";
import { calcStartDate, getToday } from "~/helper/dateMoment";
import { SETTING } from "~/utilities/storage";

const initialState = {
  search: "",
  logsFilter: {
    startDate: calcStartDate({ endDate: getToday(), diffInDays: getStorage(SETTING)?.calcDiffInDays }) ?? getToday(),
    endDate: getToday(),
  },
};

export const LogsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    setLogsFilter: (state, action) => {
      state.logsFilter = action.payload;
    },
    setLogsSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setLogsFilter, setLogsSearch } = LogsSlice.actions;

export default LogsSlice.reducer;
