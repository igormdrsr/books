import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(book.id, newTitle);
  }

  function handleChange(event) {
    setNewTitle(event.target.value);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Add a new title!</label>
        <input
          style={{
            border: "1px solid gray",
            padding: ".5rem .25rem",
            outline: "none",
            borderRadius: ".25rem",
          }}
          type="text"
          placeholder="Book's new title..."
          value={newTitle}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default BookEdit;
