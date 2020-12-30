import React from 'react';
import { Link } from 'react-router-dom';
import {
  faBook,
  faHome,
  faUserGraduate,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div
      className='sidebar d-flex flex-column justify-content-between col-md-2 col-sm-6 px-4 py-3 '
      style={{ height: '100%' }}
    >
      <ul className='list-unstyled'>
        <li>
          <Link to='/' className='dash-menu'>
            <button className='btn btn-danger mx-3'>
              <FontAwesomeIcon icon={faHome} /> Go Home
            </button>
          </Link>
        </li>
        <li>
          <Link to='/books' className='dash-menu'>
            <FontAwesomeIcon icon={faBook} /> <span>Book List</span>
          </Link>
        </li>
        <li>
          <Link to='/students' className='dash-menu'>
            <FontAwesomeIcon icon={faUserGraduate} /> <span>Students</span>
          </Link>
        </li>
        <li>
          <Link to='/librarian' className='dash-menu'>
            <FontAwesomeIcon icon={faUserShield} /> <span>Librarians</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
