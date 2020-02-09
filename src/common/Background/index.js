import React from 'react'
import PropTypes from 'prop-types'
import { ColoredBackground } from './ColoredBackground'

export * from './TechBackground'
export const Background = ({ children }) => {
  return <ColoredBackground>{children}</ColoredBackground>
}
Background.propTypes = {
  children: PropTypes.node.isRequired,
}
