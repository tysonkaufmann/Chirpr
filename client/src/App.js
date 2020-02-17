import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// import navbar
import Navigation from './components/Navigation/Navigation';

// import pages
import Landing from './pages/Landing/Landing';
import Profile from './pages/Profile/Profile.js';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Router>
      <div data-testid="app" className="App">
        <Navigation/>
        <Switch>
          {/* put exact so that the component is only rendered when http://localhost/ */}
          <Route exact path='/' component={Landing}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>

          {/* Add all pages above the error page! -KRW */}
          <Route path='*' component={ErrorPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
