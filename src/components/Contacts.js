import React from 'react'
import { Container, Form, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Contact from './Contact'

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts)

  return (
    <div className='contactWrap py-4'>
      <Container>
        <Table bordered hover className='shadow rounded-lg'>
          <thead className='bg-danger text-white font-weight-bold'>
            <tr>
              <th className='text-center'>
                {' '}
                <Form.Check type='checkbox' />
              </th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th></th>
            </tr>
          </thead>{' '}
          <tbody>
            {contacts.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default Contacts
