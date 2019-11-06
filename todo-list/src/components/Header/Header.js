import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import LanguageSwitcher from '../langSwitcher/LangSwitcher';
import './Header.scss';
import i18next from '../../i18next/i18next';

class Header extends React.Component {
    render() {
        return (
            <header className="basic-header">
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-12 col-md-3">
                            <Link to="/"  >
                                <h2 className="header-title">
                                    {i18next.t('headerTitle')}
                        </h2>
                            </Link>
                        </div>
                        <div className="col col-sm-4 col-md-3">
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                <i className="fa fa-cog" aria-hidden="true" />
                            </button>
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