import React from 'react'
import { Form } from 'react-bootstrap'

const Contact = ({ contact }) => {
  const { id, name, phone, email } = contact
  return (
    <tr key={id}>
      <td>
        <Form.Check type='checkbox' />
      </td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  )
}

export default Contact
