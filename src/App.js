import React from 'react'
import Header from './components/Header'
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css'
import Contacts from './components/Contacts'
import { Provider } from 'react-redux'
import store from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Contacts />
    </Provider>
  )
}

export default App
