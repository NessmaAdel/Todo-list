import React from 'react';
import { Link } from 'react-router-dom';


const Todo = ({ id, name, describtion ,handleDelete}) => {
    return (
        <>
            <Link to={`/view/${id}`}>
                <div className="item">
                    <h3>{name}</h3>
                    <p>{describtion}</p>

                </div>
            </Link>
            <div className="todo-icon">
                <span onClick={handleDelete}>
                    <i className="fa fa-trash-o" aria-hidden="true" />
                </span>
            </div>
        </>
    );
}
export default Todo;