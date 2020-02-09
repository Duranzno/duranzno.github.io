import React,{Fragment} from 'react'
import { Section as ScrollSection } from 'react-scroll-section'
import PropTypes from 'prop-types'
import { Heading, Container as C } from 'theme-ui'
import { LinkAnimated } from '@components'

const Container = ({ id, children, sx, Background }) => (
  <ScrollSection id={id} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
    <Background />
    <C
      className="a"
      sx={{
        minHeight: '100vh',
        minWidth: '320px',
        margin: 'auto',
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        scrollBehavior: 'smooth',
        ...sx,
      }}
    >
      {children}
    </C>
  </ScrollSection>
)

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
  Background: PropTypes.node,
}
Container.defaultProps = {
  sx: {},
  Background: Fragment,
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
