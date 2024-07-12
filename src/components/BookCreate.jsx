import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  }

  return (
    <div className="book-create">
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          border: "2px solid lightgray",
          padding: "2rem 1rem",
          borderRadius: ".25rem",
        }}
      >
        <label htmlFor="book-title">Add a new book for you collection!</label>
        <input
          style={{
            marginTop: ".25rem",
            border: "1px solid gray",
            padding: ".5rem .25rem",
            outline: "none",
            borderRadius: ".25rem",
          }}
          autoComplete="off"
          className="input"
          id="book-title"
          type="text"
          placeholder="Book's title..."
          onChange={handleChange}
          value={title}
        />
      </form>
    </div>
  );
}

export default BookCreate;
