import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { bookAdded } from './bookSlice';
import classes from './AddBookForm.module.css';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setauthor] = useState('');
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onauthorChanged = (e) => setauthor(e.target.value);
  const dispatch = useDispatch();
  const onAddBookClicked = () => {
    if (title && author) {
      dispatch(
        bookAdded({
          id: nanoid(),
          title,
          author,
        })
      );
      setTitle('');
      setauthor('');
    }
  };
  const canAdd = Boolean(title) && Boolean(author);
  return (
    <section className={classes.form}>
      <h2 className={classes.add__book}>Add a new book</h2>
      <form>
        <input
          type="text"
          className={classes.book__title}
          placeholder="Title"
          value={title}
          onChange={onTitleChanged}
        />
        <input
          type="text"
          className={classes.book__author}
          placeholder="Author"
          value={author}
          onChange={onauthorChanged}
        />
        <button
          type="button"
          disabled={!canAdd}
          className={classes.add__btn}
          onClick={onAddBookClicked}
        >
          Add Book
        </button>
      </form>
    </section>
  );
};

export default AddBookForm;
