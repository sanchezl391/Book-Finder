import React from 'react';
import './BookList.scss';
import Book from './Book/Book';


const bookList = (props) => {
    const books = [...props.books];
    console.log(books);
    let content;
    if (books.length === 0) 
        content = (
            <div className='md-txt'>
                Sorry, but there are no resulting books. Please try again. 
            </div>
        );
    else 
        content = books.map((book) => {
            console.log(book);
            return <Book key={book.id} book={book} />
        }            
        );

    return (
        <div className='book-list-container'>
            {content}    
        </div>
    );
}

export default bookList;