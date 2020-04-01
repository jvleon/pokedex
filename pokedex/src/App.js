import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux';
import { Home, PokemonDetail } from "./containers";
import { Head } from './components/'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Head />
        <Route exact path='/pokedex' component={Home} />
        <Route component={PokemonDetail} path='/pokedex/pokemon/:name' />
        <Redirect from='/' to='/pokedex' />
      </Router>
    </Provider>
    )
}

export default App;
