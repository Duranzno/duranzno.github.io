/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/** @jsx jsx */
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'

const Wrapper = styled.div`
  margin: -2em 0 0 0;
  padding: 0 1.5em 2em;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  a {
    background: ${props => props.theme.colors.primary};
    color: white;
    padding: 1em;
    border-radius: 2px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`

const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`

const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
`

export const PostLinks = props => {
  return (
    <Wrapper className="wrapper" sx={props.sx}>
      <Box className="inner-wrapper">
        {props.previous && (
          <PreviousLink to={`${props.basePath}/blog/${props.previous.slug}/`}>
            <span role="img" aria-label="previous-post">
              ⬅️
            </span>
            &nbsp;Prev
          </PreviousLink>
        )}
        {props.next && (
          <NextLink to={`${props.basePath}/blog/${props.next.slug}/`}>
            Next &nbsp;
            <span role="img" aria-label="next-post">
              ➡️
            </span>
          </NextLink>
        )}
      </Box>
    </Wrapper>
  )
}
