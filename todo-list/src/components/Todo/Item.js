import React from 'react';
import data from '../../components/todo.json';
import { Link } from 'react-router-dom';


const Item = ({ id, name, describtion }) => (
    <button data-target="#showTask" data-toggle="modal" className="show-task-btn" >
        <Link to={`/todo/${id}`} >
            <div className="item">
                <h3>{name}</h3>
                <p>{describtion}</p>

            </div>
        </Link>
    </button>
);

export default Item;