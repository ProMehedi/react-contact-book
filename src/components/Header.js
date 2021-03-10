import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar className='navbar-dark bg-primary'>
      <Container>
        <Navbar.Brand>
          <strong className='text-danger'>
            C<span className='text-light'>BOOK</span>
          </strong>
        </Navbar.Brand>
        <Nav className='ml-auto'>
          <Nav.Item>
            <Button variant='outline-light'>ADD NEW</Button>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
