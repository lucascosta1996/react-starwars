import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'
import PaginationContextProvider from './context/paginationContext'
import ListWrapper from './layout/ListWrapper'
import CharacterInfo from './components/CharacterInfo'
import Header from './layout/Header'

function App() {
  return(
    <Router>
      <PaginationContextProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <ListWrapper />
            </Route>
            <Route path="/info/:id" component={ CharacterInfo } />
          </Switch>
      </PaginationContextProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
