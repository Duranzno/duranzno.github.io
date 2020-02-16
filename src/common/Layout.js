/* eslint-disable no-undef */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { HelmetProvider } from 'react-helmet-async'
import { ScrollingProvider } from 'react-scroll-section'
import { Footer } from './Footer'
import { Background as DefaultBackground, TechBackground } from './Background'
import { Header as DefaultHeader } from './Header'

const loadScript = src => {
  const tag = document.createElement('script')
  tag.src = src
  tag.defer = true

  document.getElementsByTagName('body')[0].appendChild(tag)
}
export const Layout = ({ children, Header, sx, Background }) => {
  React.useEffect(() => {
    loadScript('https://code.iconify.design/1/1.0.3/iconify.min.js')
  }, [])
  return (
    <HelmetProvider>
      <ScrollingProvider>
        <DefaultBackground extra={Background}>
          {Header}
          <main sx={sx}>{children}</main>
          <Footer />
        </DefaultBackground>
      </ScrollingProvider>
    </HelmetProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  Header: PropTypes.node,
  Background: PropTypes.node,
  sx: PropTypes.object,
}
Layout.defaultProps = {
  Header: <DefaultHeader />,
  Background: <></>,
  sx: {},
}
