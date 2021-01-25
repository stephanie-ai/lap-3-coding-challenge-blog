import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NewForm, Posts, NavBar } from './components';

class App extends Component {
  
  render() {
    return (
      <main>
        <NavBar />
        <Switch>
          <Route exact path="/" component={NewForm} />
          <Route exact path="/posts" component={Posts} />
        </Switch>
      </main>
    )
  }
}

export default App;