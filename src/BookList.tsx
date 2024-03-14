import { useState } from 'react';
import books from './assets/books.json'
import BookListItem from './BookListItem';

export default function BookList() {
  const [sortedBooks, sortBooks] = useState<Book[]>(books as Book[]);

  const bookCompareFunction = (a: Book, b: Book) => {
    console.log('a:', a.voteCount);
    console.log('b:', b.voteCount);
    
    if (a.voteCount < b.voteCount)
      return 1;
    if (a.voteCount > b.voteCount)
      return -1;
    return 0;
  }
  
  const handleUpvote = (book: Book) => {
    console.log('handleUpvote executed');
    sortBooks((current) => {
      const updatedBooks = [...current];
      updatedBooks[updatedBooks.findIndex(b => b.isbn === book.isbn)].voteCount += 1;
      updatedBooks.sort(bookCompareFunction);
      return updatedBooks;
    });
  }

  const handleDownvote = (book: Book) => {
    console.log('handleDownvote executed');
    sortBooks((current) => {
      const updatedBooks = [...current];
      updatedBooks[updatedBooks.findIndex(b => b.isbn === book.isbn)].voteCount -= 1;
      updatedBooks.sort(bookCompareFunction);
      return updatedBooks;
    });
  }

  return (<>
    <ul>
      {sortedBooks.map(b => BookListItem(b, handleUpvote, handleDownvote))}
    </ul>
  </>);
}