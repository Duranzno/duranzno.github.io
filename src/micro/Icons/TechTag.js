/** @jsx jsx */
import { Button, Text, jsx, Flex } from 'theme-ui'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { IconifyIcon } from './IconifyIcon'

export const TechTag = props => {
  const { name, iconifyName } = props
  return (
    <Link
      to={`/tag/${name.toLowerCase()}`}
      sx={{
        p: 2,
        display: 'inline-block',
        textDecoration: 'none',
      }}
    >
      <Button
        onClick={() => {}}
        variant="tag"
        sx={{ display: 'flex', flexWrap: 'nowrap', cursor: 'pointer', alignItems: 'center', flexDirection: 'row' }}
      >
        <Text sx={{ mr: 2 }}>{name}</Text>
        <IconifyIcon iconifyName={iconifyName} sx={{ width: 5, height: 5, alignSelf: 'center' }} />
      </Button>
    </Link>
  )
}
TechTag.propTypes = {
  name: PropTypes.string.isRequired,
  iconifyName: PropTypes.string.isRequired,
}
export const TechTags = ({ stack }) => (
  <Flex
    sx={{
      flexDirection: ['column', 'row'],
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {stack.map(({ name, iconifyName, id }) => (
      <TechTag name={name} iconifyName={iconifyName} key={id} />
    ))}
  </Flex>
)
TechTags.propTypes = {
  stack: PropTypes.array.isRequired,
}
