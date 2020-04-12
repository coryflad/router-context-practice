import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Search from './Components/Search'
import Error from './Components/Error'
import Navigation from './Components/Navigation'
import './App.css'


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search' component={Search} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>




    )
  }
}
export default App