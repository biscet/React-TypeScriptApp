import React from "react"
import ReactDOM from "react-dom"
import { Route, HashRouter, BrowserRouter } from "react-router-dom"

import App from "./App/app"

ReactDOM.render(
  <HashRouter>
    <Route path="/" component={App} />
  </HashRouter>,
  document.getElementById("app")
)
