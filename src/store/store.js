import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { contactReducers } from './reducers/contactReducers'

const rootReducer = combineReducers({
  contacts: contactReducers,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
