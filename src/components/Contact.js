import React from 'react'
import Avatar from 'react-avatar'
import { Form } from 'react-bootstrap'
import { BsPencil, BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Contact = ({ contact }) => {
  const { id, name, phone, email } = contact
  return (
    <tr>
      <td className='text-center'>
        <Form.Check type='checkbox' />
      </td>
      <td>
        <Avatar name={name} size='40' round className='mr-1' /> {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className='text-center'>
        <Link to={`/edit/${id}`} className='text-dark p-1'>
          <BsPencil />
        </Link>
        <Link to='/delete' className='text-danger p-1'>
          <BsTrash />
        </Link>
      </td>
    </tr>
  )
}

export default Contact
