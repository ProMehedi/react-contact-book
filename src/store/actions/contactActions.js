import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
} from '../constants/contactConstants'

// Add New Contact
export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
})

// Get A Contact
export const getContact = (id) => ({
  type: GET_CONTACT,
  contactId: id,
})

// Update A Contact
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
})

// Update A Contact
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
})

// Select Multiple Contacts
export const selectContacts = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
})

// DeSelect Contacts
export const deSelectContacts = () => ({
  type: CLEAR_CONTACT,
})
