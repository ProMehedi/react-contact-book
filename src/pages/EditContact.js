import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getContact, updateContact } from '../store/actions/contactActions'

const EditContact = ({ history }) => {
  const dispatch = useDispatch()

  const { id } = useParams()
  const contact = useSelector((state) => state.contactInfo.contact)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (contact) {
      setName(contact.name)
      setPhone(contact.phone)
      setEmail(contact.email)
    }
    dispatch(getContact(id))
  }, [id, contact, dispatch])

  const submitHandler = (e) => {
    e.preventDefault()

    const updatedContact = { ...contact, name, phone, email }

    // Update data to redux store
    dispatch(updateContact(updatedContact))

    // Redirect to homepage
    history.push('/')
  }

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={6}>
          <Card className='my-4'>
            <Card.Body>
              <Card.Title className='border-bottom pb-2 mb-3 text-uppercase font-weight-bold text-danger'>
                Contact Information
              </Card.Title>
              <Form className='mb-0' onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter full name'
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId='phone'>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter phone number'
                    value={phone}
                    required
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
                  UPDATE CONTACT
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default EditContact
