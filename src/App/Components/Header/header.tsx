import React from "react"

import "./header.scss"

type HeaderProps = {
  title: string
  signs?: string
}

export const Header = ({ title, signs = "" }: HeaderProps): JSX.Element => (
  <header>{title + signs}</header>
)
