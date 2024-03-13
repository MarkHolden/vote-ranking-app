import { useState } from "react"

export default function BookListItem(book: Book) {
  const [voteCount, setVotes] = useState(book.voteCount ?? 0);

  const handleUpvote = () => {
    setVotes(voteCount + 1);
  };
  const handleDownvote = () => {
    setVotes(voteCount - 1);
  };

  return (<li key={book.isbn} className="card">
    <div>
      <button onClick={handleUpvote}><i className="fa-solid fa-arrow-up"></i></button>
      {voteCount}
      <button onClick={handleDownvote}><i className="fa-solid fa-arrow-down"></i></button>
    </div>
    <div>
      {book.name}
      <span>by {book.author}</span>
    </div>
  </li>
  )
}