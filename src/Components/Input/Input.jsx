import React from 'react';
import './Input.scss';

const Input = (props) => {
    const { setValue } = props;
    const onChangeHandler = (e) => {
        setValue(e.target.value);
        console.log(`on change value: ${e.target.value}`)
    }
    return ( 
        <input 
            className='sm-txt'
            value={props.val ? props.val : ''}
            onChange={onChangeHandler}
            placeholder="Search by book title or author" 
            type="text" />
    );
}

export default Input;
