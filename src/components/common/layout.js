import React from 'react'
import PropTypes from 'prop-types'
import { HelmetProvider } from 'react-helmet-async'
import { ScrollingProvider } from 'react-scroll-section'
import { useStaticQuery, graphql } from 'gatsby'
import { Header, Footer } from '../theme'

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <HelmetProvider>
      <ScrollingProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </ScrollingProvider>
    </HelmetProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
