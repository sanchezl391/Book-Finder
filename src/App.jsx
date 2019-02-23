import React, { Component } from 'react';
import Input from './Input/Input';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
library.add(faIgloo)

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
