import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './components/Home';
import { CookBook } from './components/CookBook';
import { NoMatch } from './components/NoMatch';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <React.Fragment>
    <Router>
    <NavigationBar />
    <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cookbook" component={CookBook} />
        <Route component={NoMatch} />
      </Switch>

    </Router>
  </React.Fragment>
  );
}

export default App;
