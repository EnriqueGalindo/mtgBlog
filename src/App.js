import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Home from './components/Project/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar />
    <Switch>
      <Route path='/' component={ Home } />
    </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
