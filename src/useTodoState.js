import { useState } from 'react';

export default (initialValue) => {
    const [todos, setTodos] = useState(initialValue);

    return {
        todos,
        addTodo: (todoAdd) => {
            setTodos([...todos, todoAdd]);
            let currentTodo = [...todos, todoAdd];
            localStorage.setItem('todos', JSON.stringify(currentTodo));
        },
        clearTodos: (event) => {
            event.preventDefault();
            setTodos([]);
            localStorage.setItem('todos', JSON.stringify([]));
        },
        deleteTodo: (taskToDelete) => {
            const newTodos = todos.filter((todo) => todo.id !== taskToDelete);
            setTodos(newTodos);
            localStorage.setItem('todos', JSON.stringify(newTodos));
        }
    };
};
