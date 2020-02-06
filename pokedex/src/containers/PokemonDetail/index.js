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
  constructor () {
    super()
    this.state = {
      currentPokemon: []
    }
    this.findpokemonData = this.findpokemonData.bind(this)
  }
  componentDidMount () {
    this.props.getPokedex()
  }
  findpokemonData () {
    let { pokemons } = this.props
    let pkname = this.props.match.params.name
    let pokemon = pokemons.filter(({ name }) => name == pkname)
    return <Card pokemon={pokemon[0]} />

  }
  render() {
    let { pokemons } = this.props
    return (
      <MainContainer>
      {
        pokemons && pokemons.length > 0 && this.findpokemonData()
      }
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
