import React from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => (
    <Container>
        <Button color={ 'green' }><Link to='/hello' >hello</Link></Button>
        <Button color={ 'blue' }><Link to='/about' >about</Link></Button>
    </Container>
)

const Container = styled.header`
    padding: 20px;
    background-color: darkblue;
`

const Button = styled.button`
    width: 100px;
    height: 20px;
    background-color: ${({color}) => color};
`

export default Header