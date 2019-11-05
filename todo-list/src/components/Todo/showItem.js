import React from 'react';
import data from '../../components/todo.json';

const ShowItem = ({ match: { params: { Id } } }) => (
    <section className="todoListMain">
        {
            data.map(n => (
                n.id == Id && (
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-sm">
                                <div className="modal fade" id="showTask" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Show Todo</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">

                                                <h1>{n.name}</h1>
                                                <p>{n.describtion}</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )))
        }
    </section>
)
export default ShowItem;