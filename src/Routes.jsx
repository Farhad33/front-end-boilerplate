import React from "react"
import Hello from './Components/hello/Hello.jsx'
import About from './Components/about/About.jsx'
import Home from './Components/home/Home.jsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/hello"><Hello /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/"><Home /></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes