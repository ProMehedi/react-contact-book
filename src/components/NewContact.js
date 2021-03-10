import React from 'react'
import { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const NewContact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={6}>
          <Card className='my-4'>
            <Card.Body>
              <Card.Title className='border-bottom pb-2 mb-3 text-uppercase font-weight-bold text-danger'>
                Contact Information
              </Card.Title>
              <Form className='mb-0'>
                <Form.Group controlId='name'>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter full name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId='phone'>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter phone number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Button variant='outline-primary' type='submit'>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default NewContact
