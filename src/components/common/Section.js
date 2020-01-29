import React from 'react'
import { Section as ScrollSection } from 'react-scroll-section'
import PropTypes from 'prop-types'
import { Heading } from 'theme-ui'
import { SectionContainer, LinkAnimated } from '../micro'

const Container = ({ id, children }) => (
  <ScrollSection id={id} style={{ position: 'relative' }}>
    <SectionContainer>{children}</SectionContainer>
  </ScrollSection>
)

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
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
