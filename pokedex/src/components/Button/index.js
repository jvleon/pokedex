import styled from 'styled-components'

export default styled.button`
  margin: 5px;
  border: 1px solid #43c6ac;
  background: transparent;
  padding: 5px 20px;
  outline: none;
  transition: .2s;
  color: #43c6ac;
  font-weight: 800;
  &:hover {
    background: #43c6ac;
    color: #fff;
  }
  &:active {
    box-shadow: inset 0 1px 10px rgba(0,0,0,.25);
  }
  &:disabled {
    background: gray;
    color: #fff;
    cursor: not-allowed;
    border: 1px solid gray;
  }
`