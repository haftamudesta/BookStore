import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DisplayList from './displaylist';
import Form from './form';
import { fetchBooks } from '../redux/books/books';
import './App.css';

const App = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="booksContainer">
      <DisplayList books={books} />
      <Form />
    </div>
  );
};

export default App;
