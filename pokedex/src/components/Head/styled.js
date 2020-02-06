import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 150px;
  display: flex;
  padding: 30px 5px;
  box-sizing: border-box;
  align-items: flex-end;
  background: linear-gradient(to bottom, #F8FFAE, #43C6AC);
  & > a {
    width: 300px;
  }
  &  img {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`