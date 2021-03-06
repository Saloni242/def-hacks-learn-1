import React from 'react';
import '../styles/exist.css';
import { Link } from 'react-router-dom';

function ExistUser() {
  const USERNAME = 'admin';

  return (
    <div className="exist-main">
      <div className="exist-menu">
        <div className="exist-pattern"></div>
        <div className="shape-circle"></div>
        <div className="shape-tri"></div>
        <div className="sub-menu-1">
          <Link to="/account" className="color">
            Account
          </Link>
        </div>
        <br />
        <div className="sub-menu-2">
          <Link to="/ExistUser" className="color  mt-2">
            Courses
          </Link>
        </div>
        <br />
        <div className="sub-menu-3">
          <Link to="/ExistActivity" className="color">
            Activity
          </Link>
        </div>
        <br />
        <div className="sub-menu-4">
          <Link className="color" onClick={() => alert('Coming soon!')}>
            Settings
          </Link>
        </div>
        <br />
        <div className="sub-menu-5">
          <Link to="/About" className="color">
            About
          </Link>
        </div>
      </div>
      <div className="blue-box-1"></div>
      <div className="blue-box-2">
        {' '}
        <div className="exist-title">Welcome back, {USERNAME}!</div>
      </div>

      <br />
      <div className="content-box-1"></div>
      <div className="content-box-2"></div>
      <div className="box-title">My Courses</div>
      <div className="box-content">
        Intro to HTML, CSS
        <br />
        <div className="mini-progress-1">Percent</div>
        <br />
        Intro to Git
        <br />
        <br />
      </div>
    </div>
  );
}

export default ExistUser;
