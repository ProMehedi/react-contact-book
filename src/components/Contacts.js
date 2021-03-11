import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteAllContacts,
  deSelectContacts,
  selectContacts,
} from '../store/actions/contactActions'
import Contact from './Contact'

const Contacts = () => {
  const dispatch = useDispatch()

  const [selectAll, setSelectAll] = useState(false)

  const contactInfo = useSelector((state) => state.contactInfo)
  const { contacts } = contactInfo

  useEffect(() => {
    if (selectAll) {
      dispatch(selectContacts(contacts.map((contact) => contact.id)))
    } else {
      dispatch(deSelectContacts())
    }
  }, [selectAll, contacts, dispatch])

  const deleteAllHandler = () => {
    dispatch(deleteAllContacts())
    setSelectAll(false)
  }

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
                  checked={selectAll}
                />
              </th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th className='text-center'>
                {selectAll ? (
                  <Button
                    variant='outline-light btn-sm m-0 px-1 py-0'
                    onClick={deleteAllHandler}
                  >
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
