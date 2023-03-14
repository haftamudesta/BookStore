import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: nanoid(),
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: nanoid(),
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: nanoid(),
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded(state = initialState, action) {
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
