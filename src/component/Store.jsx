import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './redux/books/bookSlice';
import categoriesReducer from './redux/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
