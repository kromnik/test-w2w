import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Медучреждение</Link>
        <div className="collapse navbar-collapse" style={{flexGrow: 0}}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/doctors">Врачи</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nurses">Медсестры</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;