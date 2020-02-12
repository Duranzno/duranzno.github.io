/* eslint-disable no-undef */
import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { randomizePosition, useWindowSize } from '@utils'
import { IconifyIcon } from '@components'

// import { UpDown, UpDownWide } from './Background.animations'

export const TechBackground = () => {
  const dimensions = useWindowSize()
  const {
    allContentfulStackLink: { edges },
  } = useStaticQuery(query)
  // FIXME: FIX TECH BACKGROUND RANDOM GENERATION
  console.log(dimensions)
  return (
    <Bg className="tech-background">
      {edges.map(e => {
        const {
          node: { id, iconifyName, name },
        } = e
        const { x, y } = randomizePosition(dimensions)
        const iconifyProps = { id, iconifyName, name, url: name }
        console.log(`${name} esta en la posición x:${x},y:${y}`)
        return <IconifyIcon x={x} y={y} key={id} sx={{ size: 5 }} {...iconifyProps} />
      })}
    </Bg>
  )
}
const query = graphql`
  query UsedStack {
    allContentfulStackLink(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          iconifyName
          name
          id
        }
      }
    }
  }
`

const Bg = styled.div`
  height: 100vh;
  position: absolute;
  width: 100vw;
  filter: blur(3px);
`
