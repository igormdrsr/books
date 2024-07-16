import { useState } from "react";

import BookEdit from "./BookEdit";

import { Trash2, SquarePen } from "lucide-react";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  function handleDeleteClick() {
    onDelete(book.id);
  }

  function handleEditClick() {
    setShowEdit((prev) => !prev);
  }

  function handleSubmit(id, newTitle) {
    onEdit(id, newTitle);
    setShowEdit(false);
  }

  let content = <h3 style={{ margin: "0" }}>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid lightgray",
        borderRadius: ".25rem",
        margin: "0",
      }}
    >
      <div
        className="actions-buttons"
        style={{
          display: "flex",
          gap: ".5rem",
          justifyContent: "flex-end",
          marginBottom: "1.5rem",
        }}
      >
        <SquarePen onClick={handleEditClick} style={{ cursor: "pointer" }} />
        <Trash2 onClick={handleDeleteClick} style={{ cursor: "pointer" }} />
      </div>
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="books"
        style={{ borderRadius: ".25rem" }}
      />
      <div>{content}</div>
    </div>
  );
}

export default BookShow;
