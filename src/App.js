import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path='/projects/' component={Projects} />
        <Route path='/contact/' component={Contact} />
        <Route path='/' component={Home} />
      </Switch>
      </BrowserRouter>
    </>


  )
}

export default App
