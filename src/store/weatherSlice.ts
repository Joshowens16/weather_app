import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  units: string;
  location: string;
}
export const weatherInitialState: InitialStateType = {
  units: "imperial",
  location: "New York City",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState: weatherInitialState,
  reducers: {
    setUnits: (state, action) => {
      state.units = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setUnits, setLocation } = weatherSlice.actions;
export default weatherSlice.reducer;
