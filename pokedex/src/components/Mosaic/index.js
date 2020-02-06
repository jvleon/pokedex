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
  const nextPage = () => {
    let page = currentPage + 1
    let begin = page * elementPerPage
    let end = page * elementPerPage + elementPerPage
    let newPokemons = pokemons.slice(begin, end)
    setTemporalPokemons(newPokemons)
    setCurrentPage(currentPage + 1)
  }
  const backPage = () => {
    let page = currentPage - 1
    let begin = page * elementPerPage
    let end = page * elementPerPage + elementPerPage
    let newPokemons = pokemons.slice(begin, end)
    setTemporalPokemons(newPokemons)
    setCurrentPage(currentPage - 1)
  }
  const goToEnd = () => {
    let begin = (totalPages - 1) * elementPerPage
    let end = totalPages * elementPerPage + elementPerPage
    let newPokemons = pokemons.slice(begin, end)
    setTemporalPokemons(newPokemons)
    setCurrentPage(totalPages - 1)
  }
  const goToBegining = () => {
    let begin = 0
    let end = elementPerPage
    let newPokemons = pokemons.slice(begin, end)
    setTemporalPokemons(newPokemons)
    setCurrentPage(0)
  }
  return (
    <Row>
      <Row alignCenter>
        <Button onClick={goToBegining} disabled={currentPage === 0}>First</Button>
        <Button onClick={backPage} disabled={currentPage === 0}>{'<'}</Button>
        <div className='page-counter'>Page: {currentPage + 1}</div>
        <Button onClick={nextPage} disabled={totalPages === (currentPage + 1)}>{'>'}</Button>
        <Button onClick={goToEnd} disabled={totalPages === (currentPage + 1)}>Last</Button>
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