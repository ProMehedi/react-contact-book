import React, { useState } from 'react'
import Avatar from 'react-avatar'
import { Form } from 'react-bootstrap'
import { BsPencil, BsTrash } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteContact } from '../store/actions/contactActions'

const Contact = ({ contact, selectAll }) => {
  const [select, setSelect] = useState(false)

  const dispatch = useDispatch()

  const { id, name, phone, email } = contact

  const deleteHandler = (id) => {
    dispatch(deleteContact(id))
  }
  return (
    <tr>
      <td className='text-center'>
        <Form.Check
          type='checkbox'
          value={selectAll}
          onChange={(e) => setSelect(e.target.value)}
          checked={selectAll}
        />
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
        <span
          className='pointer text-danger p-1'
          onClick={() => deleteHandler(id)}
        >
          <BsTrash />
        </span>
      </td>
    </tr>
  )
}

export default Contact
