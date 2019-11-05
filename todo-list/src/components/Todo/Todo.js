import React, { useState } from 'react';
import data from '../../components/todo.json';
import { Link } from 'react-router-dom';
import Item from './Item.js';

const Todo = () => (
    <div className="todo-collection">
        {data.map(e => (
            <Link to={`/todo/${e.id}`} >
                <div key={e.id} className={`todo-item ${e.completed &&'item-completed'}`}>
                    <Item Id={e.id} {...e} />
                </div>
            </Link>
        ))}

    </div>
);

export default Todo;