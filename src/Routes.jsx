import React from "react"
import { createGlobalStyle } from 'styled-components'
import Hello from './Components/hello'
import About from './Components/about'
import Home from './Components/home'
import Header from './Components/shared/Header.jsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const Routes = () => (
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/hello"><Hello /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
        </BrowserRouter>
    </>
)

export default Routes