import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { Fade } from 'react-awesome-reveal'
import { graphql, StaticQuery } from 'gatsby'
import { Flex, Box } from 'theme-ui'
import { MarkdownRenderers } from '@components'
import { Section } from '@common'

const AboutComponent = data => {
  const {
    aboutMe: {
      childMarkdownRemark: { rawMarkdownBody },
    },
  } = data.contentfulAbout
  return (
    <Section.Container id="about" sx={{ px: [4, null, 7], minHeight: '55vh', py: 4 }}>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
          <Fade bottom>
            <ReactMarkdown source={rawMarkdownBody} renderers={MarkdownRenderers} />
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  )
}
const query = graphql`
  query AboutMeQuery {
    contentfulAbout {
      aboutMe {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
  }
`
export const About = () => <StaticQuery query={query} render={AboutComponent} />
