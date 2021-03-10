import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { BsBookHalf, BsFillPersonPlusFill } from 'react-icons/bs'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar className='navbar-dark bg-primary'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <strong className='text-danger'>
              C<span className='text-light'>BOOK</span>
              <BsBookHalf color='white' className='mb-1 ml-1' size='25' />
            </strong>
          </Navbar.Brand>
        </LinkContainer>
        <Nav className='ml-auto'>
          <Nav.Item>
            <LinkContainer to='/new'>
              <Button variant='outline-light'>
                ADD NEW <BsFillPersonPlusFill size='20' className='mb-1' />
              </Button>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
