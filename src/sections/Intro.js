import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'theme-ui'
import Img from 'gatsby-image'

import { StaticQuery, graphql } from 'gatsby'

import { ProfilePicture } from '@components'
import { Section, SocialMediaTab } from '@common'
import { TechBackground } from '@common/Background'

export const IntroContent = ({ contentfulAbout: data }) => {
  const { profile, title, socialLinks } = data
  const background = <TechBackground />
  console.log(profile.fluid)
  return (
    <Section.Container id="home" background={background}>
      <Box
        className="grid-container"
        sx={{
          height: ['auto', null, '75vh'],
          maxWidth: '100vw',
          py: [4, null, '6rem'],
          px: 3,
          display: 'grid',
          gridGap: 1,
          gridTemplateColumns: ['unset', 'repeat(2, 1fr) 30% repeat(2, 1fr)'],
          gridTemplateRows: [
            'repeat(3,1fr)',
            'repeat(2, 1fr) 30% repeat(2, 1fr)',
          ],
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ProfilePicture fluid={profile.fluid} alt={profile.title} />
        <Box
          sx={{
            gridArea: ['2', '4 / 4 / 6 / 6'],
            justifySelf: ['center', 'flex-end'],
          }}
        >
          <Text
            sx={{
              mt: [4, null],
              px: [1],
              textAlign: 'left  ',
              fontSize: [4, 5],
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            {title}
          </Text>
        </Box>
        <SocialMediaTab
          socialLinks={socialLinks}
          sx={{
            flexWrap: 'wrap',
            display: 'flex',
            flexDirection: ['row', 'column'],
            gridArea: ['3', '3 / 1 / 6 / 2'],
            justifySelf: ['center', 'flex-start'],
            alignSelf: ['center', 'flex-end'],
            justifyContent: 'center',
          }}
        />
      </Box>
    </Section.Container>
  )
}

IntroContent.propTypes = {
  contentfulAbout: PropTypes.any.isRequired,
}

const query = graphql`
  query LandingQuery {
    contentfulAbout {
      name
      title
      resume
      profile {
        title
        fluid(maxWidth: 350, maxHeight: 350, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      aboutMe {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      socialLinks {
        id
        url
        name
        iconifyName
      }
    }
  }
`
export const Intro = () => <StaticQuery query={query} render={IntroContent} />
