import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css'
import Header from './components/Header'
import { Provider } from 'react-redux'
import store from './store/store'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Contacts} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
