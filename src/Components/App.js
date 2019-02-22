import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './Home/home'
import { Registration } from './Registration/registration'
import { Profile } from './Profile/profile'
import { Splash } from './Splash/splash'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Splash} />
        </Switch>
      </Router>
    );
  }
}

export default App;
