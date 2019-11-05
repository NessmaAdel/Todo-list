import React from 'react';
import { Link } from 'react-router-dom';
const LanguageSwitcher = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-3 col-sm-4">
          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              en
    </button>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/">en</Link>
              <Link className="dropdown-item" to="/">Another action</Link>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}
export default LanguageSwitcher;