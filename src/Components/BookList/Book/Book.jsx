import React from 'react';
import './Book.scss';

const book = (props) => {
    const book = props.book;

    return (
        <div className="book-container">
            <h3>{book.volumeInfo.title}</h3>
            <div className="body">
                <div className="front">
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="book cover"/>
                </div>
                <div className="back">
                    <a href="#">
                        back data
                    </a>
                </div>
            </div>
        </div>
    );
};

export default book;
