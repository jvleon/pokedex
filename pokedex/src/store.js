import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { pokemons } from './reducers/pokemon'

export default createStore(pokemons, applyMiddleware(thunk))