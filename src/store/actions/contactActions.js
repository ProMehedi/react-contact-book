import { CREATE_CONTACT } from '../constants/contactConstants'

// Add New Contact
export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  }
}
