import React, { Component } from 'react';
import './addTodo.scss';

class addTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
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
                      <form onSubmit={(event) => {
                        event.preventDefault();
                      }}>
                        <input type="text" className="form-control" id="exampleInputname" placeholder="Enter name" />
                        <textarea type="text" className="form-textarea" id="exampleInputname" aria-label="With textarea" placeholder="Enter description" />

                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" className="btn btn-primary">Submit</button>
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