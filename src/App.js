import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css'
import Header from './components/Header'
import { Provider } from 'react-redux'
import store from './store'
import Contacts from './components/Contacts'
import NewContact from './pages/NewContact'
import EditContact from './pages/EditContact'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Contacts} />
          <Route exact path='/new' component={NewContact} />
          <Route exact path='/edit/:id' component={EditContact} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
