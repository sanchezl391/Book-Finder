import React, { Component } from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Input from '../../Components/Input/Input';
import BookList from '../../Components/BookList/BookList';
import {isEquivalent} from '../../Helpers/lib';

library.add(faExternalLinkAlt);


class App extends Component {
    state = {
        inputValue: '',
        bookList: []
    } 
    
    setInputValue(val) {
        this.setState({inputValue:val});
        console.log(`set value ${val}`);
    }

    getBooks = async () => { // always returns a value
        const searchTerms = await this.state.inputValue.replace(' ', '+');

        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`);
            const data = await response.json();
            return data.items;
        } catch (e) {
            return 'failure';
        }
    };

    componentDidUpdate(p, prevState) {
        const prevStateBooks = prevState.bookList;

        console.log(`Inside Component did update`, `prevInput: ${prevState.inputValue}`, `newInput: ${this.state.inputValue}`);
        if(prevState.inputValue){
            if(this.state.inputValue !== prevState.inputValue && this.state.inputValue){
                this.getBooks().then((books) => {
                    if(books && !isEquivalent(prevStateBooks, books)) 
                        this.setState({bookList: books});
                }); 
            } else if(!this.state.inputValue) {
                this.setState({bookList: []});                     
            }   
        } 
    }

    render() {
        let { inputValue } = this.state;

        return (
            <div className="app-container">
                <a href="/"><h1 className='lg-txt'>BOOK FINDER</h1></a>
                <Input setValue={this.setInputValue.bind(this)} val={inputValue} />
                <BookList books={this.state.bookList}/>
            </div>
        );
    }
}

export default App;
