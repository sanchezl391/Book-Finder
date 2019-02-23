import React, {Component} from 'react';
import './BookList.scss';
import Book from './Book/Book';

class BookList extends Component {
    state = {
        books: []
    }

    render() {
        let content;
        if (this.state.books.length === 0) 
            content = <div className='md-txt'>
                Sorry, but there are no resulting books. Please try again. 
            </div>;

        return (
            <div className='book-list-container'>
                {/* {content}     */}
                <Book />
            </div>
        );
    }
}

export default BookList;