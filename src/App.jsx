import React, { Component } from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import Input from './Input/Input';
import BookList from './BookList/BookList';

library.add(faIgloo);


class App extends Component {
    state = {
        inputValue: ''
    } 
    
    setInputValue(val) {
        this.setState({inputValue:val});
        console.log(`set value ${val}`);
    }

    render() {
        console.log(this.state.inputValue);
        let { inputValue } = this.state;
        return (
            <div className="app-container">
                <a href="/"><h1 className='lg-txt'>BOOK FINDER</h1></a>
                <Input setValue={this.setInputValue.bind(this)} val={inputValue} />
                <BookList />
            </div>
        );
    }
}

export default App;
