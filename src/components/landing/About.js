import React from 'react'
import ReactMarkdown from 'react-markdown'

import { graphql, StaticQuery } from 'gatsby'
import { Flex, Box } from 'theme-ui'
import { Section } from '../common'
import { MarkdownRenderer } from '../micro'

const query = graphql`
  query AboutMeQuery {
    contentfulAbout {
      aboutMe {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      profile {
        title
        image: resize(width: 450, quality: 100) {
          src
        }
      }
    }
  }
`
const AboutComponent = data => {
  const {
    aboutMe: {
      childMarkdownRemark: { rawMarkdownBody },
    },
    profile,
  } = data.contentfulAbout
  return (
    <Flex sx={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <ReactMarkdown source={rawMarkdownBody} renderers={MarkdownRenderer} />
      </Box>
    </Flex>
  )
}
export const About = () => {
  return (
    <Section.Container id="about">
      <StaticQuery query={query} render={AboutComponent} />
    </Section.Container>
  )
}
