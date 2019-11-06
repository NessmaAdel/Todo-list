import React from 'react';
import { Link } from 'react-router-dom';


const Todo = ({ id, name, describtion }) => (
    <Link to={`/view/${id}`}>
        <div className="item">
            <h3>{name}</h3>
            <p>{describtion}</p>

        </div>
    </Link>
);

export default Todo;