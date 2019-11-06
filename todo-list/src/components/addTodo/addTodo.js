import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import './addTodo.scss';

class addTodo extends Component {
  render() {
    const { name, describ, handleChangeName, handleChangeDescribe, handleSubmit } = this.props
    return (
      <section className="todoListMain">
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm">
              <div className="modal fade" id="addTask" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Add Todo</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control" id="exampleInputname" placeholder="Enter name" value={name} onChange={handleChangeName} />
                        <textarea type="text" className="form-textarea" id="exampleInputname" aria-label="With textarea" placeholder="Add Description" onChange={handleChangeDescribe} value={describ} />

                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" className="btn btn-primary"
                        onClick={handleSubmit}>Submit</button>
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
export default addTodo;