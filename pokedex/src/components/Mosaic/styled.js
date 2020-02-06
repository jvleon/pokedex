import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  ${({ alignCenter }) => {
    if(alignCenter) return `
      align-items: center;
      justify-content: center;
    `;
  }};
  & .page-counter {
    color: #fff;
    font-weight: 500;
    letter-spacing: 2px;
    text-shadow: 2px 0 0 #43c6ac, -2px 0 0 #43c6ac, 0 2px 0 #43c6ac, 0 -2px 0 #43c6ac, 1px 1px #43c6ac, -1px -1px 0 #43c6ac, 1px -1px 0 #43c6ac, -1px 1px 0 #43c6ac;
  }
`