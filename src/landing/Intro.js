import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'theme-ui'

import { StaticQuery, graphql } from 'gatsby'

import { ProfilePicture } from '@components'
import { Section, SocialMediaTab } from '@common'

export const IntroContent = ({ contentfulAbout: data }) => {
  const { profile, title, socialLinks } = data
  return (
    <Section.Container id="home">
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
          gridTemplateRows: ['repeat(3,1fr)', 'repeat(2, 1fr) 30% repeat(2, 1fr)'],
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ProfilePicture
          sx={{
            gridArea: ['1', '3 / 3 / 4 / 4'],
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            size: [6, '200px', 7],
          }}
          src={profile.image.src}
          alt={profile.title}
        />
        <Box sx={{ gridArea: ['2', '4 / 4 / 6 / 6'], justifySelf: ['center', 'flex-end'] }}>
          <Text
            sx={{
              mt: [4, null],
              px: [1],
              textAlign: 'left  ',
              fontSize: [2, 3, 4, 5],
              fontWeight: 'bold',
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
        image: resize(width: 450, quality: 100) {
          src
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
