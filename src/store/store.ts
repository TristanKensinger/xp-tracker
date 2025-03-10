import { configureStore } from "@reduxjs/toolkit";
import pillarsReducer from "./pillarsSlice.ts";
import xpReducer from "./xpSlice.ts";

export const store = configureStore({
  reducer: {
    pillars: pillarsReducer,
    xp: xpReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
