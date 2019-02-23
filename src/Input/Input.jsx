import React, {Component} from 'react';
import './Input.scss';

class Input extends Component { 
    state = {
        value: ''
    };

    onChangeHandler = (e)=> {this.setState({value: e.target.value});}

    render() { 
        return ( 
            <input 
                value={this.state.value}
                onChange={this.onChangeHandler}
                placeholder="Search by book title or author" 
                type="text" />
        );
    }
}

export default Input;
