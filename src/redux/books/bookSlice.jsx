import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded(state, action) {
      state.push(action.payload);
    },
    deleteBook(state, action) {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const selectAllBooks = (state) => state.books;
export const { bookAdded, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
