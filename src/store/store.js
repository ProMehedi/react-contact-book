import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { contactReducers } from './reducers/contactReducers'

const store = createStore(contactReducers, composeWithDevTools())

export default store
