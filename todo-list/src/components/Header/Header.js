import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import LanguageSwitcher from '../langSwitcher/langSwitcher';
import './Header.scss';

const Header = () => (
    <header>
        <div className="basic-header">
            <div className="container">
                <div className="row justify-content-md-center align-items-start">
                    <div className="col col-lg-4 col-sm-2">
                        <Link to="/settings" >
                            <i className="fa fa-cog" aria-hidden="true" />
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-auto">
                        <h2 className="header-title">
                            Todo-List
                        </h2>
                    </div>
                    <div className="col col-lg-2 col-sm-2">
                        <Link to="/addTask" >
                            <i className="fa fa-plus" aria-hidden="true" />
                        </Link>

                    </div>
                    <div className="col col-lg-2 col-sm-2">
                            <LanguageSwitcher />

                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default withRouter(Header);