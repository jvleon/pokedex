import React from 'react'
import {
  Frame,
  LeftBox,
  RightBox,
  BaseData,
  Stats
} from './styled'

const Card = ({ pokemon }) => (
  <Frame>
    <LeftBox>
      <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png' />
    </LeftBox>
    <RightBox>
      <BaseData>
        <span>Name: Pikachu</span>
        <span>Types:</span>
        <div>fire</div>
        <div>poison</div>
      </BaseData>
      <Stats>
        <div className='abilities'>
          <span>Abilities: </span>
          <div>
            <span>chlorophyll</span>
          </div>
        </div>
        <div className='stats'>
          <span>Stats: </span>
          <div>
            <span>speed-</span>
            <span>45</span>
          </div>
        </div>
      </Stats>
    </RightBox>
  </Frame>
)

export default Card
