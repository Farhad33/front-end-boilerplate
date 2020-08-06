import React from "react"
import { Link } from 'react-router-dom'

const Home = () => (
    <>
        <button><Link to='/hello' >hello</Link></button>
        <button><Link to='/about' >about</Link></button>
    </>
)

export default Home