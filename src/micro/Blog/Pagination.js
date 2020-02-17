/* eslint-disable consistent-return */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { navigate } from 'gatsby'
import { Button } from 'theme-ui'

export const Pagination = ({
  context: { humanPageNumber, numberOfPages, paginationPath, nextPagePath, previousPagePath },
}) => {
  const changePage = ({ target: { value } }) => {
    navigate(value ? `${paginationPath}/${value}` : `${paginationPath}/`)
  }
  return (
    numberOfPages > 1 && (
      <Wrapper>
        <div>
          <select value={humanPageNumber === 1 ? `` : humanPageNumber} onChange={changePage} label="">
            {Array.from({ length: numberOfPages }, (_, i) => (
              <option value={`${i === 0 ? `` : i + 1}`} key={`page${i + 1}`}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div>
          {previousPagePath && (
            <Button to={`${previousPagePath}`}>
              <span>&larr;</span>
              &nbsp; Prev
            </Button>
          )}
          {nextPagePath && (
            <Button style={{ order: 3 }} to={`${nextPagePath}`}>
              Next &nbsp;
              <span>&rarr;</span>
            </Button>
          )}
        </div>
      </Wrapper>
    )
  )
}

Pagination.propTypes = {
  context: PropTypes.shape({
    humanPageNumber: PropTypes.number.isRequired,
    numberOfPages: PropTypes.number.isRequired,
    nextPagePath: PropTypes.string.isRequired,
    paginationPath: PropTypes.any.isRequired,
    previousPagePath: PropTypes.string.isRequired,
  }).isRequired,
}

const Wrapper = styled.div`
  width: 100%;
  margin: -1.5rem auto 2.5rem;
  max-width: ${props => props.theme.sizes[props.theme.sizes.length - 1]};
  padding: 0 1.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
`
