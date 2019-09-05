import React, { Component } from "react"

import "./main.scss"
import image from "../../Static/Media/image.png"

import { Header } from "../../Components/Header/header"

export default class Main extends Component<any, {}> {
  render() {
    return (
      <main>
        <Header title={"Do you speak english it!?"} />
        <img src={image} alt="" />
      </main>
    )
  }
}
