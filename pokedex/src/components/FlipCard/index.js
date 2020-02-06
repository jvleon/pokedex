import React from 'react'
import {
  FlipCard,
  FlipCardBack,
  FlipCardFront,
  FlipCardInner,
  FlipCardContainer
} from './styled'

const Flip = ({ onClick, data }) => (
  <FlipCardContainer>
    <FlipCard onClick={onClick}>
      <FlipCardInner>
        <FlipCardFront>
          <img
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
            alt='pokemon'
          />
        </FlipCardFront>
        <FlipCardBack>
          <span>Bulbasor</span>
          <div>grass</div>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  </FlipCardContainer>
)

export default Flip