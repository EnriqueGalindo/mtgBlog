import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import NavBar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar />
    </div>
    <BrowserRouter></BrowserRouter>
    
  );
}

export default App;
