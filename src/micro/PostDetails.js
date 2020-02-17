/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  text-align: center;

  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const Date = styled.p`
  display: inline-block;
`

const ReadingTime = styled.p`
  display: inline-block;
`

// eslint-disable-next-line react/prop-types
export const PostDetails = ({ date, timeToRead }) => {
  return (
    <Wrapper sx={{ mx: 'auto', mb: 1 }}>
      <Date>
        <span aria-label="Calendar Icon" role="img">
          📅
        </span>
        {date}
      </Date>
      <span>•</span>
      <ReadingTime>{`⏱️${timeToRead} min read `}</ReadingTime>
    </Wrapper>
  )
}
