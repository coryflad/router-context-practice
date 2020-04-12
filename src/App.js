import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Search from './Components/Search'
import Error from './Components/Error'
import Navigation from './Components/Navigation'
import Button from './Components/Button'

import { ThemeContextConsumer } from './themeContext'

import './App.css'


function App(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <div className={`${context.theme}-theme`}>
          <BrowserRouter>
            <Button />
            <Navigation />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/search' component={Search} />
              <Route component={Error} />
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </ThemeContextConsumer>

  )
}


export default App