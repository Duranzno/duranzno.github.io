import React from 'react'
import Headroom from 'react-headroom'
import styled from '@emotion/styled'
import { SectionLinks } from 'react-scroll-section'
import { Flex, Image } from 'theme-ui'

import { formatLinks } from '../utils/render'
import { RouteLink } from '../micro'
import Logo from '../svg/logo.svg'

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.background};
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
      <Flex sx={{ flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', px: 5, py: 1 }}>
        <SectionLinks>
          {({ allLinks }) => {
            const { home, links } = formatLinks(allLinks)

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
  )
}
