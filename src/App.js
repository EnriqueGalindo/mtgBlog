import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Home from './components/Project/Home';
import ArticleDetails from './components/Project/ArticleDetails'
import SignIn from './components/auth/SignIn'
import Register from './components/auth/Register'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar />
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/article/:id' component={ArticleDetails} />
      <Route path='/signin' component={SignIn} />
      <Route path='/register' component={Register} />
    </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
