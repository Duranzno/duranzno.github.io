import React from 'react'
import styled from '@emotion/styled'
import { Fade } from 'react-awesome-reveal'
import { StaticQuery, graphql } from 'gatsby'
import { Text, Box, Link, Flex } from 'theme-ui'
import { IconifyLink } from '@components'

const FooterComponent = data => {
  const { name, socialLinks } = data.contentfulAbout
  const Links = socialLinks.map(({ id, ...rest }) => (
    <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
      <IconifyLink {...rest} sx={{ width: 4, height: 4 }} />
    </Box>
  ))
  return (
    <FooterContainer sx={{ p: 3 }} as="footer" className="footer">
      <Fade left triggerOnce>
        <TextFooter fontSize={[2, 3]}>
          <span>{`${name}'s Portfolio - Powered by `}</span>
          <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </TextFooter>
      </Fade>
      <Fade right triggerOnce>
        <Flex>{Links}</Flex>
      </Fade>
    </FooterContainer>
  )
}
export const Footer = () => <StaticQuery query={query} render={FooterComponent} />
const FooterContainer = styled(Box)`
  width: 100vw;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`

const TextFooter = styled(Text)`
  color: ${props => props.theme.colors.background};

  & a {
    color: ${props => props.theme.colors.background};
  }
`
const query = graphql`
  query FooterQuery {
    contentfulAbout {
      name
      socialLinks {
        id
        url
        name
        iconifyName
      }
    }
  }
`
