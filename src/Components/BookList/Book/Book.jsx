import React from 'react';
import './Book.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const book = (props) => {
    const {book} = props;
    const thumbnail = (book.volumeInfo.hasOwnProperty('imageLinks') ? book.volumeInfo.imageLinks.thumbnail : '');
    const authors = (book.volumeInfo.hasOwnProperty('authors')) ? book.volumeInfo.authors.map((author) => author + ' ') : 'Unknown';
    const publisher = book.volumeInfo.publisher;
    const selfLink = book.volumeInfo.infoLink;
    
    return (
        <div className="book-container">
            <h3>{book.volumeInfo.title}</h3>
            <div className="body">
                <div className="front">
                    <img src={thumbnail} alt="book cover" />
                </div>
                <div className="back"> 
                    <p className="sm-txt">
                        Authors: { authors }
                    </p>
                    <p className="sm-txt">
                        Publishing Company: { publisher }
                    </p>
                </div>
            </div>
            <a className="gray-txt" target="_blank" rel="noopener noreferrer" href={selfLink}>
                <FontAwesomeIcon className="md-txt" icon="external-link-alt" />
            </a>
        </div>
    );
};

export default book;
