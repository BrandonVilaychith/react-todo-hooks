import React from 'react';

const Todo = ({ task, deleteTodo, id }) => {
    return (
        <div className='collection-item'>
            <span>{task}</span>
            <span>
                <i
                    style={{ cursor: 'pointer' }}
                    className='material-icons right'
                    onClick={() => deleteTodo(id)}>
                    delete
                </i>
            </span>
        </div>
    );
};

export default Todo;
