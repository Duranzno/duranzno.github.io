import React from 'react'
import { Button, Text } from 'theme-ui'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export const TechTag = ({ name, iconifyName }) => {
  return (
    <Link to={`/tags/${name}`} sx={{ p: 1, display: 'inline-block' }}>
      <Button onClick={() => {}}>
        <Text>{name}</Text>
      </Button>
    </Link>
  )
}
TechTag.propTypes = {
  name: PropTypes.string.isRequired,
  iconifyName: PropTypes.string.isRequired,
}
