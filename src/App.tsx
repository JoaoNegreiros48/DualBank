import React from 'react';
import { Main } from './components/main';
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
        <div className="main">
          <TopMenu/>
          <Main/>
        </div>
      </div>
    </div>
  );
}

export default App;
