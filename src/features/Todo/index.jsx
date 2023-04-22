import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const todolist=[
        {
            id:1,
            value:'Eat',
        },
        {
            id:2,
            value:'Code',
        },
        {
            id:1,
            value:'Sleep',
        },
    ]
    return (
        <div>
            <h3>
                <TodoList todolist={todolist}/>
            </h3>
        </div>
    );
}

export default TodoFeature;