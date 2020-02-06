import styled from 'styled-components'

export default styled.div`
  border: 16px solid #F8FFAE;
  border-top: 16px solid #43C6AC;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: spin 2s linear infinite;
  margin: 30vh auto;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`