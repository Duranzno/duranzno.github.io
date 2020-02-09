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
  return (
    <Bg>
      {edges.map(e => {
        const {
          node: { id, iconifyName, name },
        } = e
        const { x, y } = randomizePosition(dimensions)
        const choose = !!Math.random()
        return <IconifyIcon x={x} id={id} key={id} y={y} name={name} iconifyName={iconifyName} url={name} />
        // return choose ? <UpDown key={id}>{icon}</UpDown> : <UpDownWide key={id}>{icon}</UpDownWide>
        // return icon
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
  position: absolute;
  height: 100%;
  width: 100vw;
  z-index: -1;
`
