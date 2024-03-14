export default function BookListItem(book: Book, handleUpvote: (book: Book) => void, handleDownvote: (book: Book) => void) {

  return (<li key={book.isbn} className="card">
    <div>
      <button onClick={() => handleUpvote(book)}><i className="fa-solid fa-arrow-up"></i></button>
      {book.voteCount}
      <button onClick={() => handleDownvote(book)}><i className="fa-solid fa-arrow-down"></i></button>
    </div>
    <div>
      {book.name}
      <span>by {book.author}</span>
    </div>
  </li>
  )
}