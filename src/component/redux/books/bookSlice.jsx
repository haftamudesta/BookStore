import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    bookAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllBooks = (state) => state.books;
export const { bookAdded } = bookSlice.actions;

export default bookSlice.reducer;
