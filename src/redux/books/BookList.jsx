import { useSelector, useDispatch } from 'react-redux';
import { selectAllBooks, deleteBook } from './bookSlice';
import classes from './BookList.module.css';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);
  const renderBooks = books.map((book) => (
    <article key={book.id} className={classes.book__list}>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <button
        type="button"
        className={classes.delete__btn}
        onClick={() => {
          dispatch(deleteBook(book.id));
        }}
      >
        Delte Book
      </button>
    </article>
  ));

  return <section>{renderBooks}</section>;
};

export default BookList;
