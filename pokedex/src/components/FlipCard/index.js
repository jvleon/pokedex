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
            src={data.extra_data && data.extra_data.sprites && data.extra_data.sprites.front_default}
            alt={data.name}
          />
        </FlipCardFront>
        <FlipCardBack>
          <span>{data.name}</span>
          {data.extra_data && data.extra_data.types && data.extra_data.types.length > 0 && 
            data.extra_data.types.map((type, i) => (
              <div key={i}>{type.type.name}</div>
            ))
          }
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  </FlipCardContainer>
)

export default Flip