import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo }) => {
    const renderTodos = todos.map(({ id, task }) => {
        return <Todo key={id} task={task} deleteTodo={deleteTodo} id={id} />;
    });

    return <div className='collection'>{renderTodos}</div>;
};

export default TodoList;
