import React from 'react'
import "./App.css";
import Menu from './component/Menu';
import Home from './pages/Home';
import Registeration from './pages/Registeration';
import Registered from './pages/Registered';
import {Route,Routes} from "react-router-dom";
import Registeration_edit from './pages/Registeration_edit';
function App() {
  return (
    <div id='app'>
      <Menu></Menu>
      <div id="body">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Registeration" element={<Registeration/>}/>
          <Route path="/Registered-list" element={<Registered/>}/>
          <Route path="/Registered-edit/:id" element={<Registeration_edit/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App