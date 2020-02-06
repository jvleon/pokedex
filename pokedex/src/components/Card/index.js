import React from 'react'
import {
  Frame,
  LeftBox,
  RightBox,
  BaseData,
  Stats
} from './styled'
import { pokemons } from '../../reducers/pokemon'

const Card = ({ pokemon }) => (
  <Frame>
  {console.log('pokemon>>', pokemon)}
    <LeftBox>
      <img
        src={pokemon.extra_data && pokemon.extra_data.sprites && pokemon.extra_data.sprites.front_default}
        alt={pokemon.name}
      />
    </LeftBox>
    <RightBox>
      <BaseData>
        <span>Name: {pokemon.name}</span>
        <span>Types:</span>
        {
          pokemon.extra_data && pokemon.extra_data.types && pokemon.extra_data.types.map(({ type: { name } }) =>(
            <div>{name}</div>
          ))
        }
      </BaseData>
      <Stats>
        <div className='abilities'>
          <span>Abilities: </span>
          <div>
            {
              pokemon.extra_data && pokemon.extra_data.abilities.map(({ ability: { name } }, i) => (
                <span key={i}>{name} </span>
              ))
            }
          </div>
        </div>
        <div className='stats'>
          <span>Stats: </span>
          {
            pokemon.extra_data && pokemon.extra_data.stats.map(({ base_stat, stat: { name } }, i) => (
              <div key={i}>
                <span>{name} - </span>
                <span>{base_stat}</span>
              </div>
            ))
          }
        </div>
      </Stats>
    </RightBox>
  </Frame>
)

export default Card
