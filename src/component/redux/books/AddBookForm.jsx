import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { bookAdded } from "./bookSlice";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setauthor] = useState("");
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onauthorChanged = (e) => setauthor(e.target.value);
  const dispatch = useDispatch();
  const onSavePostClicked = () => {
    if (title && author) {
      dispatch(
        bookAdded({
          id: nanoid(),
          title,
          author,
        })
      );
      setTitle("");
      setauthor("");
    }
  };
  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="bookTitle">Book Title</label>
        <input
          type="text"
          id="bookTitle"
          name="bookTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="bookauthor">Book author</label>
        <input
          type="text"
          id="bookauthor"
          name="bookauthor"
          value={author}
          onChange={onauthorChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          Add Book
        </button>
      </form>
    </section>
  );
};

export default AddBookForm;
