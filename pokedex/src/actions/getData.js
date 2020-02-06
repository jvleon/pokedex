import { GET_ALL_POKEMONS } from '../actionTypes'

function getPokemons (payload) {
  return {
    type: GET_ALL_POKEMONS,
    payload
  }
}

export const getPokemonsData = async (name) => {
  let data = {}
  try {
     await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then(response => {
        return response.json()
      })
      .then(response => {
        data = response
      })
      .catch(e => {
        console.log(e);
      })
  } catch {
    console.log('error on fetch')
  }
  return data
}

export const getPokedex =  () => {
  return dispatch => {
    fetch('https://pokeapi.co/api/v2/pokedex/1/')
      .then(response => {
        return response.json()
      })
      .then(async response => {
        let PokemonList = await Promise.all(
          response.pokemon_entries.map(async data => {
            let newData = await getPokemonsData(data.pokemon_species.name).then(pokemon => {
              return {
                ...data.pokemon_species,
                extra_data: pokemon
              }
            })
            return newData
          })
        )
      dispatch(getPokemons(PokemonList))
    })
  }
  }