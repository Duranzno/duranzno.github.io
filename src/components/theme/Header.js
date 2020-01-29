import React from 'react'
import Headroom from 'react-headroom'
import styled from '@emotion/styled'
import { SectionLinks } from 'react-scroll-section'
import { Flex, Image } from 'theme-ui'
import { capitalize } from '../utils/render'
import { RouteLink } from '../micro'
import Logo from '../svg/logo.svg'

const formatLinks = allLinks =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home'
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          }
    },
    { links: [], home: null }
  )

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.secondary};
  }

  .headroom--unfixed {
    background: ${props => props.theme.colors.primary};
  }
  position: absolute;
  width: 100%;
`
export const Header = () => {
  return (
    <HeaderContainer>
      <Flex
        sx={{ flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', p: 3 }}
        className="flex-header"
      >
        <SectionLinks>
          {({ allLinks }) => {
            const { home, links } = formatLinks(allLinks)

            const homeLink = home && (
              <Image
                src={Logo}
                width="25px"
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
  )
}
