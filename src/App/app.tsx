import React, { Component } from "react"
import { hot } from "react-hot-loader"
import { Router } from "@reach/router"

import "./Static/Styles/app.scss"

import "./Entities/reference"
import "./Entities/history"
import "./Entities/mixin-helper"

import { AppRoutes } from "./Routes/appRoutes"

type AppProps = {
  path: string
}

const PathRoutes: Function = (): JSX.Element[] =>
  AppRoutes.map((route, i) => <route.component key={i} path={route.path} />)

export default hot(module)(
  class App extends Component<AppProps> {
    render() {
      return (
        <div className="wrapper">
          <PathRoutes />
        </div>
      )
    }
  }
)
