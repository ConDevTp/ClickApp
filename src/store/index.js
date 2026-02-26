import { builderSliceReducer } from "@/reducers/builderSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    builder: builderSliceReducer,
  },
});
