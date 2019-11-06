import React, { useState } from 'react';
import data from '../../components/todo.json';
import Todo from './Todo';

class Todos extends React.Component {
    render() {
        const { Items, handleDelete } = this.props
        return (
            <div className="todo-collection">
                {Items.map(item => (
                    <div key={item.id} className={`todo-item ${item.completed && 'item-completed'}`}>
                        <Todo Id={item.id} {...item}
                            handleDelete={() => handleDelete(item.id)} />
                    </div>
                ))}

            </div>
        );
    }
}
export default Todos;