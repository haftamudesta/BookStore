/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFetch } from '../redux/books/books';
import classes from './Book.module.css';

const Book = (props) => {
  const { id, book } = props;
  const { title, author, category } = book;
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(removeBookFetch(id));
  };

  return (
    <li className={classes.books}>
      <div className={classes.book__list}>
        <h3 className={classes.book__categories}>{category}</h3>
        <h2>{title}</h2>
        <h3 className={classes.book__categories}>{author}</h3>
      </div>
      <button type="button" className={classes.action__btns}>
        Comments
      </button>
      <button
        type="button"
        onClick={removeBook}
        className={classes.action__btns}
      >
        Remove
      </button>
      <button type="button" className={classes.action__btns}>
        Edit
      </button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  book: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
