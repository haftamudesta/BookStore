import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import classes from './form.module.css';
import { addBookFetch } from '../redux/books/books';

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const submitBook = (infobook) => {
    dispatch(addBookFetch({ ...infobook, item_id: uuidv4() }));
    /* console.log(dispatch(addBookFetch({ ...infobook, item_id: uuidv4() }))); */
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submitBook)} className={classes.form}>
      <div>
        <h1 className={classes.add_book}>Add new book</h1>
      </div>
      <div className={classes.inputs}>
        <input
          type="text"
          className={classes.title}
          {...register('title', { required: true })}
          placeholder="Book title"
        />
        <input
          type="text"
          className={classes.author}
          {...register('author', { required: true })}
          placeholder="Author"
        />
        <input
          type="text"
          className={classes.categories}
          {...register('category', { required: true })}
          placeholder="Category"
        />
        <input type="submit" value="Submit" className={classes.submit__btn} />
      </div>
    </form>
  );
};

export default Form;
