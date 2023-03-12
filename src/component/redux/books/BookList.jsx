import { useSelector } from 'react-redux';
import { selectAllBooks, deleteBook } from './bookSlice';
import { useDispatch } from 'react-redux';
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
        onClick={() => {
          dispatch(deleteBook(book.id));
          console.log('clicked');
          console.log('id', book.id);
        }}
      >
        Delte Book
      </button>
    </article>
  ));

  return (
    <section>
      <h1>books</h1>
      {renderBooks}
    </section>
  );
};

export default BookList;
