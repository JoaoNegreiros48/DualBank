import React from 'react';
import { Navbar } from './components/navbar';
import { SideBar } from './components/sidebar';
import './styles/global.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SideBar/>
    </div>
  );
}

export default App;
