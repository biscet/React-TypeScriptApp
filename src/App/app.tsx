import React, { Component } from "react"
import { hot } from "react-hot-loader"
import { Switch, Route } from "react-router-dom"

import "./Static/Styles/app.scss"

import "./Entities/reference"
import "./Entities/history"
import "./Entities/mixin-helper"

import { AppRoutes } from "./Routes/appRoutes"

const PathRoutes: any = (): JSX.Element[] =>
  AppRoutes.map((route, i) => (
    <Route
      key={i}
      path={route.path}
      component={route.component}
      exact={route.exact}
    />
  ))

export default hot(module)(
  class App extends Component {
    render() {
      return (
        <div className="wrapper">
          <Switch>
            <PathRoutes />
          </Switch>
        </div>
      )
    }
  }
)
