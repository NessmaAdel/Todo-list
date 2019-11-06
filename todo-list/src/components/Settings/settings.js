import React from 'react';
import data from '../../components/todo.json';
import './settings.scss';
import i18next from 'i18next';
class Settings extends React.Component {
    state = {
        checked: false
    }
    handleClick = (id) => {
        this.setState({
            checked: !this.state.checked
        });
    }
    render() {
        const { checked } = this.state;
        const { handleSort } = this.props

        return (
            <section className="setting">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sssm">
                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">{i18next.t('modalTitleSetting')}</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onClick={this.handleClick} />
                                                {checked ? (
                                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                                        <strike>  {i18next.t('sortId')}</strike>
                                                    </label>) : (<label className="form-check-label" htmlFor="defaultCheck1">
                                                        {i18next.t('sortId')}
                                                    </label>
                                                    )}
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"
                                                    onClick={this.handleClick} />
                                                {checked ? (
                                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                                        <strike>  {i18next.t('complete')}</strike>
                                                    </label>) : (<label className="form-check-label" htmlFor="defaultCheck1">
                                                        {i18next.t('complete')}
                                                    </label>
                                                    )}
                                            </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">{i18next.t('close')}</button>
                                            <button type="button" className="btn btn-primary" onClick={handleSort}
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