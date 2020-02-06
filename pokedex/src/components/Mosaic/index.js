import React from 'react' 
import {
  Row
} from './styled'
import { Flip, Button } from '../'


const Mosaic = ({ pokemons }) => (
  <Row>
    <Row alignCenter>
      <Button>First</Button>
      <Button>{'<'}</Button>
      <div className='page-counter'>Page: 1</div>
      <Button >{'>'}</Button>
      <Button>Last</Button>
    </Row>
    <Row>
    {
      pokemons.map((pokemon, i) => (
        <Flip key={i} data={pokemon} onClick={() => console.log(this.props)} />
      ))
    } 
    </Row>
  </Row>
)

export default Mosaic