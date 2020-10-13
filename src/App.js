import React from 'react';
import Nav from './privateTemplate/Nav';
import SideBar from './privateTemplate/SideBar';
import "./App.css";
import RightBar from './privateTemplate/RightBar';
import Routes from './privateTemplate/Routes';

function App() {
  return (
    <div id="wrapper" className="wrapper animsition">
      <nav className="navbar navbar-fixed-top" role="navigation">
        <Nav/>
      </nav>
      <div className="sidebar" role="navigation">
        <SideBar/>
      </div>
      <div className="side-bar right-bar">
        <RightBar/>
      </div>
      <div className="control-sidebar-bg"></div>
      <div id="page-wrapper">
        <Routes/>
      </div>
    </div>
  );
}

export default App;
