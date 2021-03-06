import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../../styles/sidebar.css';

function Sidebar() {
  var LESSON_NAME = 'Intro to HTML';

  return (
    // <div className="sidebar">
    //   <h3>{LESSON_NAME}</h3>
    //   <div className="btn-col">
    //     <Link>
    //       <button className="sidebar-button">Videos</button>
    //     </Link>
    //     <Link>
    //       <button className="sidebar-button">Code</button>
    //     </Link>
    //     <div className="code-samples">
    //       <h4>List of code samples</h4>
    //     </div>
    //     <Link>
    //       <button className="sidebar-button">Tests</button>
    //     </Link>
    //   </div>
    // </div>
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
          <Link to="/ExistUser" className="color">
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
    </div>
  );
}

export default Sidebar;
