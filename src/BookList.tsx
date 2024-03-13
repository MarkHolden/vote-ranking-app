import { useState } from 'react';
import books from './assets/books.json'
import BookListItem from './BookListItem';

export default function BookList() {
  const [sortedBooks, sortBooks] = useState<Book[]>(books as Book[]);

  const sortList = () => {
    console.log('sortList executed');

    sortedBooks.sort((a: Book, b: Book) => { return a.voteCount - b.voteCount; });
    sortBooks(sortedBooks);
  };

  return (<>
    <ul onClick={sortList}>
      {sortedBooks.map(b => BookListItem(b))}
    </ul>
  </>);
}