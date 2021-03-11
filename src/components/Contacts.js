import React, { useState } from 'react'
import { Button, Container, Form, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Contact from './Contact'

const Contacts = () => {
  const [selectAll, setSelectAll] = useState(false)

  const contactInfo = useSelector((state) => state.contactInfo)
  const { contacts } = contactInfo

  return (
    <div className='contactWrap py-4'>
      <Container>
        <Table bordered hover className='shadow rounded-lg'>
          <thead className='bg-danger text-white font-weight-bold'>
            <tr>
              <th className='text-center'>
                <Form.Check
                  type='checkbox'
                  value={selectAll}
                  onChange={() => setSelectAll(!selectAll)}
                />
              </th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th className='text-center'>
                {selectAll ? (
                  <Button variant='outline-light btn-sm m-0 px-1 py-0'>
                    DELETE ALL
                  </Button>
                ) : (
                  <Button
                    variant='outline-dark btn-sm m-0 px-1 py-0 text-muted'
                    disabled
                  >
                    DELETE ALL
                  </Button>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Contact
                key={contact.id}
                contact={contact}
                selectAll={selectAll}
              />
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default Contacts
