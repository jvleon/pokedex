import React, { Component } from 'react'
import {
  MainContainer,
  Row
} from './styled'
import {
  Mosaic
} from '../../components'

class Home extends Component {
  render () {
    return (
      <MainContainer>
        <Row>
        <Mosaic/>
        </Row>
      </MainContainer>
    )
  }
}

export default Home