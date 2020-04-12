import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Search from './Components/Search'
import Error from './Components/Error'
import Navigation from './Components/Navigation'

import ThemeContext from './themeContext'

import './App.css'


function App() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={`${theme}-theme`}>
          <BrowserRouter>
            <Navigation />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/search' component={Search} />
              <Route component={Error} />
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </ThemeContext.Consumer>

  )
}


export default App