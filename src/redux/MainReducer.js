import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

export const MainSlice = createSlice({
  name: "MAIN_SLICE",
  initialState: initialState,

  reducers: {
    categoryListFunc: (state, action) => {
      state.categorytList = action.payload;
    },
    productListFunc: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export const Data = MainSlice.reducer;
export const { categoryListFunc, productListFunc } = MainSlice.actions;
