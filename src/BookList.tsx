import { useState } from 'react';
import books from './assets/books.json'
import BookListItem from './BookListItem';
import { cloneDeep } from 'lodash';

export default function BookList() {
  const [sortedBooks, sortBooks] = useState<Book[]>(books as Book[]);

  const bookCompareFunction = (a: Book, b: Book) => {
    if (a.voteCount < b.voteCount)
      return 1;
    if (a.voteCount > b.voteCount)
      return -1;
    return 0;
  }

  const handleUpvote = (book: Book) => {
    console.log('handleUpvote executed');
    sortBooks((current) => {
      console.log('sortBooks executed');
      const index = current.findIndex(b => b.isbn === book.isbn)
      const updatedBooks = cloneDeep(current);
      updatedBooks[index].voteCount = current[index].voteCount + 1;
      updatedBooks.sort(bookCompareFunction);
      return updatedBooks;
    });
  }

  const handleDownvote = (book: Book) => {
    console.log('handleDownvote executed');
    sortBooks((current) => {
      console.log('sortBooks executed');
      const index = current.findIndex(b => b.isbn === book.isbn)
      const updatedBooks = cloneDeep(current);
      updatedBooks[index].voteCount = current[index].voteCount - 1;
      updatedBooks.sort(bookCompareFunction);
      return updatedBooks;
    });
  }

  return (<ul>{sortedBooks.map(b => BookListItem(b, handleUpvote, handleDownvote))}</ul>);
}