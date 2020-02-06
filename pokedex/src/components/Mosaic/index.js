import React, { useEffect, useState } from 'react' 
import {
  Row
} from './styled'
import { Flip, Button } from '../'


const Mosaic = ({ pokemons }) => {
  const [temporalPokemons, setTemporalPokemons] = useState([])
  const [elementPerPage, setElementsPerPage] = useState(8)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages]= useState(0)
  
  useEffect(() => {
    let pages = Math.ceil(pokemons.length / elementPerPage)
    setTotalPages(pages)
    let newPokemons
    if (currentPage === 0) newPokemons = pokemons.slice(currentPage, elementPerPage)
    else newPokemons = pokemons.slice(currentPage, currentPage * elementPerPage)
    setTemporalPokemons(newPokemons)
  }, [pokemons])
  return (
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
        temporalPokemons.map((pokemon, i) => (
          <Flip key={i} data={pokemon} onClick={() => console.log(this.props)} />
        ))
      } 
      </Row>
    </Row>
  )
}

export default Mosaic