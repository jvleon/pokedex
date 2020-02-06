import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPokedex } from '../../actions/getData'
import {
  MainContainer,
  Row
} from './styled'
import {
  Mosaic
} from '../../components'

class Home extends Component {
  componentDidMount () {
    this.props.getPokedex()
  }
  render () {
    const { pokemons } = this.props
    return (
      <MainContainer>

        <Row>
        {
          pokemons && pokemons.length > 0 && <Mosaic pokemons={pokemons} />
        }
        </Row>
      </MainContainer>
    )
  }
}

const MapStateToProps = ({ pokemons }) => {
  return {
    pokemons
  }
}

const MapDispatchToProps = {
  getPokedex
}

export default connect(MapStateToProps, MapDispatchToProps)(Home)