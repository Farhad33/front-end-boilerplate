import React from "react"
import ReactDOM from 'react-dom'

const Hello = () => <h1>hello world</h1>

const rootContainer = document.getElementById("root")
ReactDOM.render(<Hello />, rootContainer)