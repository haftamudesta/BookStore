import AddBookForm from './redux/books/AddBookForm';
import BookList from './redux/books/BookList';

const Books = () => {
  return (
    <main>
      <BookList />
      <AddBookForm />
    </main>
  );
};

export default Books;
