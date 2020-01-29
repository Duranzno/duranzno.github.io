import React, { useState } from 'react'
import { SectionLinks } from 'react-scroll-section'

export const Header = () => {
  const [sidebar, toggle] = useState(false)
  return (
    <SectionLinks>
      {({ allLinks }) => {
        // const { home, links } = formatLinks(allLinks)

        // const homeLink = home && (
        // <Image
        //   src={Logo}
        //   width="50px"
        //   alt="Portfolio Logo"
        //   onClick={home.onClick}
        //   style={{
        //     cursor: 'pointer',
        //   }}
        // />
        // )
        // const navLinks = links.map(({ name, value }) => (
        //   <RouteLink key={name} onClick={value.onClick} selected={value.selected} name={name} />
        // ))

        return <>{JSON.stringify(allLinks)}</>
      }}
    </SectionLinks>
  )
}
