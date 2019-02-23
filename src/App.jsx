import React, { Component } from 'react';
import Input from './Input/Input';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <h1>BOOK FINDER</h1>
                <Input />
            </div>
        );
    }
}

export default App;
