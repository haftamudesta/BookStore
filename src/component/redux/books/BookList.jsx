import { useSelector } from "react-redux";
import { selectAllBooks } from "./bookSlice";

const BookList = () => {
  const books = useSelector(selectAllBooks);
  const renderBooks = books.map((book) => (
    <article key={book.id}>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
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
