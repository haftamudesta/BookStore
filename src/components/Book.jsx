import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { removeBookFetch } from '../redux/books/books';
import classes from './Book.module.css';

const Book = (props) => {
  const { id, book } = props;
  const { title, author, category } = book;
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(removeBookFetch(id));
  };
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 20);
  function getText() {
    const sentences = [
      'introduction',
      'A Lesson Learned',
      'principles of redux',
    ];
    const random = sentences[Math.floor(Math.random() * sentences.length)];
    return random;
  }

  return (
    <main className={classes.books}>
      <div>
        <li>
          <div className={classes.book__list}>
            <h3 className={classes.book__categories}>{category}</h3>
            <h2>{title}</h2>
            <button type="button" className={classes.book__author}>
              {author}
            </button>
          </div>
          <button type="button" className={classes.comment__btns}>
            Comments
          </button>
          <button
            type="button"
            onClick={removeBook}
            className={classes.remove__btns}
          >
            Remove
          </button>
          <button type="button" className={classes.edit__btns}>
            Edit
          </button>
        </li>
      </div>
      <div className={classes.middle__section}>
        <div className={classes.react__icon}>
          <AiOutlineLoading3Quarters />
        </div>
        <div className={classes.middle__section_left}>
          <p>
            {num1}
            <span>&#37;</span>
          </p>
          <p className={classes.completed}>Completed</p>
        </div>
      </div>
      <div className={classes.right__section}>
        <h1 className={classes.current__chapter}>
          current
          <span>&nbsp;</span>
          chapter
        </h1>
        <p>
          Chapter
          <span>&nbsp; &nbsp;</span>
          {num2}
          <span>&nbsp; &nbsp;</span>
          {getText()}
        </p>
        <button type="button" className={classes.update__btn}>
          update progress
        </button>
      </div>
    </main>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  book: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
