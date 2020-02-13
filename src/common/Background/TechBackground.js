/* eslint-disable no-undef */
import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { randomizePosition, useWindowSize } from "@utils"
import { IconifyIcon } from "@components"
import {
  upDownAnimation,
  upDownWideAnimation,
} from "../common.styles.animations"

export const TechBackground = () => {
  const dimensions = useWindowSize()
  const {
    allContentfulStackLink: { edges },
  } = useStaticQuery(query)
  return (
    <Bg className="tech-background">
      {edges.map(e => {
        const {
          node: { id, iconifyName, name },
        } = e
        const { x, y } = randomizePosition(dimensions)
        const sx = {
          size: Math.floor(Math.random() * 3) + 4,
          animation: Math.random() ? upDownAnimation : upDownWideAnimation,
        }
        const iconifyProps = { id, iconifyName, name, url: name, sx }
        return <IconifyIcon animated x={x} y={y} key={id} {...iconifyProps} />
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
