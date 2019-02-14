import React, { useState } from 'react';

const TodoForm = ({ saveTodo, clearTodos }) => {
    const [newTodo, setNewTodo] = useState('');
    const changeHandler = (event) => {
        setNewTodo(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        saveTodo(newTodo);
        setNewTodo('');
    };
    return (
        <form onSubmit={submitHandler}>
            <input
                type='text'
                name='newTodo'
                placeholder='Add Todo'
                onChange={changeHandler}
                value={newTodo}
                autoComplete='off'
            />
            <button
                className='waves-effect waves-light btn light-blue'
                style={{ marginRight: '5px' }}
                type='submit'>
                Add
            </button>
            <button
                className='waves-effect waves-light btn red darken-2'
                onClick={clearTodos}>
                Clear
            </button>
        </form>
    );
};

export default TodoForm;
