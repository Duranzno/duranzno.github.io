import React from "react"
import PropTypes from "prop-types"
import { ColoredBackground } from "./ColoredBackground"

export * from "./TechBackground"
export const Background = ({ children, extra }) => {
  return (
    <ColoredBackground>
      {extra}
      {children}
    </ColoredBackground>
  )
}
Background.propTypes = {
  children: PropTypes.node.isRequired,
  extra: PropTypes.node,
}
Background.defaultProps = {
  extra: <></>,
}
