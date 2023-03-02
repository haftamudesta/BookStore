import classes from './books.module.css';

const Books = () => {
  const books = [
    {
      id: 1,
      title: ' A smart way to learn JavaScript',
      author: 'Mark Myers',
    },
    {
      id: 2,
      title: ' The Javascript Language',
      author: 'Ilya Kantor',
    },
    {
      id: 3,
      title: ' Head First JavaScript Programming',
      author: 'Elisabeth Robson',
    },
  ];
  return (
    <main>
      {books.map((book) => (
        <div className={classes.book__list}>
          <h3 className={classes.title} key={book.id}>
            {book.title}
          </h3>
          <h3 className={classes.author} key={book.id}>
            {book.author}
          </h3>
          <div className={classes.buttons}>
            <button type="submit" className={classes.actionBtns}>
              Comments
            </button>
            <button type="submit" className={classes.actionBtns}>
              Remove
            </button>
            <button type="submit">Edit</button>
          </div>
        </div>
      ))}
      <form className={classes.form}>
        <div>
          <h1>Add new book</h1>
        </div>

        <div>
          <input
            type="text"
            placeholder="title"
            className={classes.form__title}
          />
          <input
            type="text"
            placeholder="author"
            className={classes.form__author}
          />
          <button disabled type="submit">
            abb book
          </button>
        </div>
      </form>
    </main>
  );
};

export default Books;
