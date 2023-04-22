import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todolist:PropTypes.array,
};
TodoList.propTypes={
    todolist:[],
}
function TodoList({todolist}) {
    
    return (
        <ul>
            {todolist.map(todo =>(
            <li key={todo.id}>{todo.value}</li>
            ))}
        </ul>            
    );
}

export default TodoList;