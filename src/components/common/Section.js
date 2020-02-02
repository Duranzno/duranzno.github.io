import React from 'react'
import { Section as ScrollSection } from 'react-scroll-section'
import PropTypes from 'prop-types'
import { Heading, Styled } from 'theme-ui'
import { LinkAnimated } from '../micro'

const Container = ({ id, children, sx }) => (
  <ScrollSection id={id} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
    <Styled.div
      sx={{
        minHeight: '100vh',
        minWidth: '320px',
        maxWidth: '1440px',
        display: 'flex',
        margin: 'auto',
        flex: '0 1 auto',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5em 1em',
        scrollBehavior: 'smooth',
        ...sx,
      }}
    >
      {children}
    </Styled.div>
  </ScrollSection>
)

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
}
Container.defaultProps = {
  sx: {},
}

const Header = ({ name, icon, label }) => (
  <Heading color="secondaryDark" mb={4}>
    <LinkAnimated selected>
      {name}
      {icon && (
        <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
          {icon}
        </span>
      )}
    </LinkAnimated>
  </Heading>
)

Header.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
}
Header.defaultProps = {
  icon: '',
  label: '',
}

export const Section = {
  Container,
  Header,
}
