import React from 'react'
import styled from '@emotion/styled'
import Fade from 'react-reveal/Fade'
import { StaticQuery, graphql } from 'gatsby'
import { Text, Box, Link, Flex } from 'theme-ui'
import { SocialLink } from '../micro'

const FooterContainer = styled.div`
  min-width: 320px;
  max-width: 1366px;
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
      socialLinks {
        id
        url
        name
        iconifyName
      }
    }
  }
`
const FooterComponent = data => {
  const { name, socialLinks } = data.contentfulAbout

  return (
    <Box sx={{ p: 3, backgroundColor: 'secondary' }} as="footer">
      <FooterContainer>
        <Fade left>
          <TextFooter fontSize={[2, 3]}>
            <span>{`${name} Portfolio - Powered by `}</span>
            <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
            <span> and </span>
            <Link href="https://www.contentful.com/" mr={1}>
              Contentful
            </Link>
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </TextFooter>
        </Fade>
        <Flex>
          <Fade right>
            {socialLinks.map(({ id, ...rest }) => (
              <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
                <SocialLink {...rest} color="background" dim="15px" />
              </Box>
            ))}
          </Fade>
        </Flex>
      </FooterContainer>
    </Box>
  )
}
export const Footer = () => <StaticQuery query={query} render={FooterComponent} />
