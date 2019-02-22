import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './Home/home'
import { Registration } from './Registration/registration'
import { Profile } from './Profile/profile'
import { Splash } from './Splash/splash'
import { Events } from './Events/events'
import { Event } from './Event/event'
import { NavigationTab } from './NavigationTab';

const userProfile = {
  name: 'criss rojas',
  response: 'ESFP',
  badges: 4,
}

class App extends Component {
  componentDidMount() {
    localStorage.setItem('userCookie', JSON.stringify(userProfile));
  }

  render() {
    return (
      <Router>
        <div className={"main-container"}>
          <NavigationTab />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/event/:id" component={Event} />
            <Route exact path="/" component={Splash} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
