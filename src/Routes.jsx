import React from "react"
import styled, { createGlobalStyle } from 'styled-components'
import Hello from './Components/hello'
import About from './Components/about'
import Home from './Components/home'
import Header from './Components/shared/Header.jsx'
import Footer from './Components/shared/Footer.jsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

function heightOffset() {
    let header = document.querySelector('header').offsetHeight
    let footer = document.querySelector('footer').offsetHeight

    return window.innerHeight - (header + footer)
}

class Offset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0
        }
    }

    componentDidMount() {
        this.setState({
            size: heightOffset()
        })
    }

    render() {
        return <Div size={this.state.size}/>
    }
}

const Div = styled.div`
    height: ${({size}) => size}px;
`

const Routes = () => (
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Header />
            <Switch>
                <Offset>
                    <Route path="/hello"><Hello /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="/"><Home /></Route>
                </Offset>
            </Switch>
            <Footer />
        </BrowserRouter>
    </>
)

export default Routes