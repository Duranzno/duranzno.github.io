import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { navigate, Location } from '@reach/router'
import Headroom from 'react-headroom'
import styled from '@emotion/styled'
import { SectionLinks } from 'react-scroll-section'
import { Flex, Image } from 'theme-ui'
import { formatLinks, isEmpty } from '@utils'
import { RouteLink } from '@components'
import Logo from '../svg/logo.svg'

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.primary};
  }

  .headroom--unfixed {
    background: ${props => props.theme.colors.primary};
  }
  position: absolute;
  width: 100%;
  max-height: 7vh;
`
export const Header = () => {
  return (
    <Location>
      {({ location: { origin } }) => (
        <HeaderContainer>
          <Flex
            sx={{
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: [3, 5],
              py: [3],
            }}
          >
            <SectionLinks>
              {({ allLinks }) => {
                const defaultLinks = setDefaultLinks(origin)
                const { home, links } = formatLinks(isEmpty(allLinks) ? defaultLinks : allLinks)
                const homeLink = home && (
                  <Image
                    sx={{ width: 30 }}
                    src={Logo}
                    alt="Portfolio Logo"
                    onClick={home.onClick}
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                )
                const navLinks = links.map(({ name, value }) => (
                  <RouteLink key={name} onClick={value.onClick} selected={value.selected} name={name} />
                ))
                return (
                  <>
                    {homeLink}
                    <Flex mr={[0, 3, 5]}>{navLinks}</Flex>
                  </>
                )
              }}
            </SectionLinks>
          </Flex>
        </HeaderContainer>
      )}
    </Location>
  )
}
const setDefaultLinks = location => ({
  home: { onClick: () => navigate(`${location}#home`), selected: true },
  about: { onClick: () => navigate(`${location}#about`), selected: false },
  projects: { onClick: () => navigate(`${location}#projects`), selected: false },
  writing: { onClick: () => navigate(`${location}#writing`), selected: false },
})
