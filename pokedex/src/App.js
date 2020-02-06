import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux';
import { Home, PokemonDetail } from "./containers";
import { Head } from './components/'

const App = () => {
  return (
    <Provider store={store}>
      <Head />
      <Router>
        <Route exact path="/" component={Home} />
        <Route component={PokemonDetail} path="/pokemon/" />
        <Route component={PokemonDetail} path="/pokemon/:name" />
      </Router>
    </Provider>
    )
}

export default App;
