/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { randomizePosition } from '@utils'
import { StackIcon } from '@components'
import { UpDown, UpDownWide } from './Background.animations'

const Bg = styled.div`
  position: absolute;
  height: 100%;
  width: 100vw;
  z-index: -1;
`
export const TechBackground = () => {
  const [dim, setDim] = React.useState({ x: 1, y: 1 })
  let innerHeight = 0
  let innerWidth = 0
  if (typeof window !== 'undefined') {
    innerHeight = window.innerHeight
    innerWidth = window.innerWidth
  }
  useEffect(() => {
    console.log(JSON.stringify({ innerHeight, innerWidth }))
    setDim(() => ({
      x: innerWidth,
      y: innerHeight,
    }))
  }, [innerWidth, innerHeight])
  const {
    allContentfulStackLink: { edges },
  } = useStaticQuery(query)
  return (
    <Bg>
      {edges.map(e => {
        const {
          node: { id, iconifyName, name },
        } = e
        const { x, y } = randomizePosition(dim)
        const choose = !!Math.random()
        return <StackIcon x={x} id={id} key={id} y={y} name={name} iconifyName={iconifyName} url={name} />
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
