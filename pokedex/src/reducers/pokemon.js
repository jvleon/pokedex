import { GET_ALL_POKEMONS } from '../actionTypes'
const initialValue = []

export const pokemons = (state = initialValue, { type, payload }) => {
  switch (type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}