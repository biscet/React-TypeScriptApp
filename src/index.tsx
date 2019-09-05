import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"

import App from "./App/app"

ReactDOM.render(
  <Router>
    <App path="/" />
  </Router>,
  document.getElementById("app")
)
