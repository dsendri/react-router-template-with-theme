import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
          <Route path="/" component={HomePage} exact={true} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
