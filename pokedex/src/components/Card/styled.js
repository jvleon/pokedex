import styled from 'styled-components'

export const Frame = styled.div`
  width: 50%;
  margin: 100px auto;
  height: 200px;
  display: flex;
  box-shadow: 0 2px 15px rgba(0,0,0,.25);
  padding: 10px;
`

export const LeftBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border: 2px solid #fff;
  & > img {
    width: 100%;
  }
`

export const RightBox = styled.div`
  flex: 4;
  display: flex;
  padding: 20px;
  border-left: 1px solid rgba(0,0,0,.25);
  flex-direction: row;
`

export const BaseData = styled.div`
  flex: 1;
  flex-direction: column;
  & > div {
    margin: 10px 0;
  }
  & > span {
    display: block;
    margin: 10px 0;
  }
  & > .types {

  }
`

export const Stats = styled.div`
  flex: 2;
  flex-direction: column;
  & > .abilities {
    width: 100%;
    margin: 10px 0;
  }
  & > .stats {
    width: 100%;
    margin: 10px 0;
  }
`