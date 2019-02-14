import React, { useState } from 'react';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import useTodoState from './useTodoState';

const storage = JSON.parse(localStorage.getItem('todos'));
const initialState = !storage ? [] : storage;

const App = () => {
    const { todos, addTodo, clearTodos, deleteTodo } = useTodoState(
        initialState
    );
    const saveTodo = (newTodo) => {
        const trimmedTodo = newTodo.trim();
        const todoAdd = {
            task: trimmedTodo,
            id: Date.now(),
            completed: false
        };
        if (trimmedTodo.length > 0) {
            addTodo(todoAdd);
        }
    };
    return (
        <div className='container'>
            <TodoForm saveTodo={saveTodo} clearTodos={clearTodos} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;
