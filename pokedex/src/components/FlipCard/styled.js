import styled from 'styled-components'

export const FlipCardContainer = styled.div`
  width: 25%;
  height: 300px;
`

export const FlipCard = styled.div`
  background-color: transparent;
  height: 100%;
  width: 100%;
  border: 4px solid #f1f1f1;
  perspective: 1000px;
  cursor: pointer;
  box-sizing: border-box;
`

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${FlipCard}:hover & {
    transform: rotateY(180deg);
  }
`

export const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: linear-gradient(to bottom,#fff,#43C6AC);
  color: black;
  box-sizing: border-box;
  > img {
    height: 100%;
    max-width: 100%;
  }
`

export const FlipCardBack = styled.div`
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(248, 255, 174, .5);
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 5px 0;
    color: black;
  }
  & > span {
    font-weight: 500;
    font-size: 35px;
    color: black;
  }
`