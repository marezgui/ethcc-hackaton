import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "../../theme";

export const theme = createSlice({
  name: "theme",
  initialState: "vanilla",
  reducers: {
    update: (state, action: PayloadAction<Theme>) => action.payload,
  },
});

export const { update } = theme.actions;

export default theme.reducer;