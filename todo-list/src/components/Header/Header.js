import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import LanguageSwitcher from '../langSwitcher/langSwitcher';
import Todo from '../todo.json';
import './Header.scss';
import TodoList from '../addTask/addTask';

class Header extends React.Component {
    addItems = () => (
        <TodoList />
    );
    render() {
        return (
            <header className="basic-header">
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-12 col-md-3">
                            <Link to="/" >
                                <h2 className="header-title">
                                    Todo-List
                        </h2>
                            </Link>
                        </div>
                        <div className="col col-sm-4 col-md-3">
                            <Link to="/settings">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    <i className="fa fa-cog" aria-hidden="true" />
                                </button>
                            </Link>
                        </div>
                        <div className="col col-md-3 col-sm-4">
                            <Link to="/addTodo">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addTask">
                                    <i className="fa fa-plus" aria-hidden="true" />
                                </button>
                            </Link>
                        </div>
                        <div className="col col-md-3 col-sm-4">
                            <LanguageSwitcher />

                        </div>
                    </div>
                </div>
            </header>
        );
    }
};
export default withRouter(Header);