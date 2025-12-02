import {App} from "./App"
import React from "react"
import ReactDom from 'react-dom/client'

const container = document.getElementById("root")
const root = ReactDom.createRoot(container)
root.render(
    <>
    <App/>
    <React.Fragment>

    <h1>Reactor</h1>
    <h1>Deactor</h1>
    <h1>Start!</h1>
    </React.Fragment>
    </>
)