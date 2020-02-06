import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import store from './store'
import { Provider } from 'react-redux';

const Home = () => <div>Home</div>

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route component={Home} path="/pokemon/:name" />
      </Router>
    </Provider>
    )
}

export default App;
