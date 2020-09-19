import React from 'react';
import Nav from './privateTemplate/Nav';
import SideBar from './privateTemplate/SideBar';
import "./App.css";

function App() {
  return (
    <div id="wrapper" className="wrapper animsition">
      <Nav/>
      <SideBar/>

    </div>
  );
}

export default App;
