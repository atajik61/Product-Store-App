import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  query: "",
  sort: "featured", // featured | price-asc | price-desc
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },

    setQuery(state, action) {
      state.query = action.payload;
    },

    setSort(state, action) {
      state.sort = action.payload;
    },

    resetFilters(state) {
      state.category = "all";
      state.query = "";
      state.sort = "featured";
    },
  },
});

export const {
  setCategory,
  setQuery,
  setSort,
  resetFilters,
} = productsSlice.actions;

export default productsSlice.reducer;