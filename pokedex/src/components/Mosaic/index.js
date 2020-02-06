import React from 'react' 
import {
  Row
} from './styled'
import { Flip, Button } from '../'


const Mosaic = () => (
  <Row>
    <Row alignCenter>
      <Button>First</Button>
      <Button>{'<'}</Button>
      <div className='page-counter'>Page: 1</div>
      <Button >{'>'}</Button>
      <Button>Last</Button>
    </Row>
    <Row>
      <Flip />
      <Flip />
      <Flip />
      <Flip />
      <Flip />
      <Flip />
      <Flip />
      <Flip />
    </Row>
  </Row>
)

export default Mosaic