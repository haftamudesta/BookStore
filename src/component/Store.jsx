import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../component/redux/books/bookSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
