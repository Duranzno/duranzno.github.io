/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'
import { HelmetProvider } from 'react-helmet-async'
import { ScrollingProvider } from 'react-scroll-section'
import { Header } from './Header'
import { Footer } from './Footer'
import { Background } from './Background'

const loadScript = src => {
  const tag = document.createElement('script')
  tag.src = src
  tag.defer = true

  document.getElementsByTagName('body')[0].appendChild(tag)
}
export const Layout = ({ children }) => {
  React.useEffect(() => {
    loadScript('https://code.iconify.design/1/1.0.3/iconify.min.js')
  }, [])
  return (
    <HelmetProvider>
      <ScrollingProvider>
        <Header />
        <Background>
          <main>{children}</main>
        </Background>
        <Footer />
      </ScrollingProvider>
    </HelmetProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
