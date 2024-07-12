import { useState } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  function createBook(title) {
    setBooks((prev) => [
      ...prev,
      { id: Math.round(Math.random() * 9999), title },
    ]);
  }

  function deleteBookById(id) {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  }

  function editBookById(id, newTitle) {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(updatedBooks);
  }

  return (
    <div className="app">
      <BookCreate onCreate={createBook} />
      <h1>Reading list</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}

export default App;
