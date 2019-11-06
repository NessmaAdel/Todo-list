import React from 'react';
import data from '../../components/todo.json';
import './settings.scss';
import i18next from 'i18next';
class Settings extends React.Component {
    state = {
        todos: data,
        filtered: [],
        checked: false
    }
    componentDidMount = () => {
        this.setState({
            filtered: this.state.todos
        });
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            filtered: nextProps.todos
        });
    }
    handleClick = (id) => {
        this.setState({
            checked: !this.state.checked
        });
    }
    markComplete = id => {
        this.setState({
            todos: this.state.filtered.map(todos => {
                if (todos.id === id) {
                    todos.completed = !todos.completed;
                }
                return todos;
            })
        });

    }
    render() {
        const { filtered, checked } = this.state;

        return (
            <section className="setting">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sssm">
                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Settings</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onClick={this.handleClick} />
                                                {checked ? (
                                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                                        <strike>Sort by name</strike>
                                                    </label>) : (<label className="form-check-label" htmlFor="defaultCheck1">
                                                        Sort by name
                                                    </label>
                                                    )}
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"
                                                    onClick={this.handleClick} />
                                                {checked ? (
                                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                                        <strike>Completed</strike>
                                                    </label>) : (<label className="form-check-label" htmlFor="defaultCheck1">
                                                        Completed
                                                    </label>
                                                    )}
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" onClick={this.handleClick} />
                                                {checked ? (
                                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                                        <strike>Store New Draft </strike>
                                                    </label>) : (<label className="form-check-label" htmlFor="defaultCheck1">
                                                        Store New Draft
                                                    </label>
                                                    )}
                                            </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" onClick={this.markComplete}
                                                todos={filtered}
                                            >{i18next.t('save')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}
export default Settings;