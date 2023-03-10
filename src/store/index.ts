import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import weatherReducer from "./weatherSlice";
const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
