import React, { useState } from 'react';
import data from '../../components/todo.json';
import Todo from './Todo';

const Todos = () => (
    <div className="todo-collection">
        {data.map(e => (
            <div key={e.id} className={`todo-item ${e.completed && 'item-completed'}`}>
                <Todo Id={e.id} {...e} />
            </div>
        ))}

    </div>
);

export default Todos;