import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPokedex } from '../../actions/getData'
import {
  MainContainer,
  Row
} from './styled'
import {
  Card
} from '../../components'
class PokemonDetail  extends Component {
  componentDidMount () {
    this.props.getPokedex()
  }
  render() {
    console.log(this.props)
    return (
      <MainContainer>
        <Row>
          <Card />
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

export default connect(MapStateToProps, MapDispatchToProps)(PokemonDetail)
