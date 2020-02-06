import React from 'react'
import logo from '../../assets/logo.png'
import { Header } from './styled'
import { withRouter, Link } from 'react-router-dom'

const Head = () => (
  <Header>
    <Link to='/' styles={{  }}>
      <img src={logo} alt='logo' />
    </Link>
  </Header>
)

export default withRouter(Head)