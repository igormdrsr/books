import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  if (!books || books.length === 0) {
    return <div>No books available</div>;
  }

  return (
    <section
      style={{
        display: "flex",
        gap: ".5rem",
        flexWrap: "wrap",
        marginTop: ".5rem",
        border: "1px solid lightgray",
        borderRadius: ".25rem",
        padding: "1rem",
      }}
      className="book-list"
    >
      {books.map((book) => (
        <BookShow
          key={book.id}
          book={book}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </section>
  );
}

export default BookList;
