import { useState } from "react";
import "./App.css";
import BookList from "./component/redux/books/BookList";
import AddBookForm from "./component/redux/books/AddBookForm";

function App() {
  return (
    <div className="App">
      <h1> Book Store implemented with react redux</h1>
      <BookList />
      <AddBookForm />
    </div>
  );
}

export default App;
