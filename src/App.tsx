import React from 'react';
import { Navbar } from './components/navbar';
import { SideBar } from './components/sidebar';
import { TopMenu } from './components/topMenu';
import './styles/global.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="menus">
        <SideBar/>
        <TopMenu/>
      </div>
    </div>
  );
}

export default App;
