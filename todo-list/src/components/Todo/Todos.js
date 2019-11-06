import React from 'react';
import Todo from './Todo';

class Todos extends React.Component {
    render() {
        const { Items, handleDelete } = this.props
        console.log("Items", Items.map(item => item));
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