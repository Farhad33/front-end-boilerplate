import React from "react"
import { Link } from 'react-router-dom'

const Hello = () => (
    <>
        <h1>hello world</h1>
        <button><Link to='/' >home</Link></button>
    </>
)

export default Hello