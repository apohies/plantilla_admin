import React from 'react';
import Nav from './privateTemplate/Nav';
import SideBar from './privateTemplate/SideBar';
import "./App.css";
import Right_bar from './privateTemplate/Right_bar';

function App() {
  return (
    <div id="wrapper" className="wrapper animsition">
      <Nav/>
      <SideBar/>
      <Right_bar/>
    </div>
  );
}

export default App;
