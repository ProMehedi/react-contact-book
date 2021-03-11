import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
} from '../constants/contactConstants'

// Add New Contact
export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
})

// Get A Contact
export const getContact = (id) => ({
  type: GET_CONTACT,
  contactId: Number(id),
})

// Update A Contact
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
})
