import React from 'react'
import { SectionLink } from 'react-scroll-section'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { Styled, Text } from 'theme-ui'

const StyledLink = styled(Styled.a)`
  display: inline-block;
  transition: color 250ms, text-shadow 250ms;
  color: ${props => props.theme.colors.grey};
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &:after {
    position: absolute;
    z-index: -1;
    bottom: 1px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
    transition: all 250ms;
  }

  &:hover {
    color: ${props => props.theme.colors.secondary};
    &::after {
      height: 110%;
      width: 110%;
    }
  }
`

const MarkdownParagraph = styled(Text)`
  line-height: 1.5em;

  &:first-of-type {
    margin-top: 0em;
  }
`

const MarkdownList = styled(Styled.ul)`
  margin: 0;
`

const MarkdownListItem = styled(Styled.li)`
  margin: 1em 0;
  font-size: ${props => `${props.theme.sizes[3]}px`};
`

const MarkdownLink = ({ href, children }) => {
  const isInnerLink = href.startsWith('#')
  return isInnerLink ? (
    <SectionLink section={href.substring(1, href.length)}>
      {({ onClick }) => <StyledLink onClick={onClick}>{children}</StyledLink>}
    </SectionLink>
  ) : (
    <StyledLink href={href} target="_blank" rel="noreferrer">
      {children}
    </StyledLink>
  )
}

MarkdownLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
}
MarkdownLink.defaultProps = {
  children: <></>,
}

export const MarkdownRenderers = {
  paragraph: props => (
    <MarkdownParagraph
      sx={{
        fontSize: [4],
      }}
      {...props}
    />
  ),
  list: props => <MarkdownList sx={{}} {...props} />,
  listItem: props => <MarkdownListItem sx={{}} {...props} />,
  link: MarkdownLink,
}
