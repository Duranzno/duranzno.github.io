/** @jsx jsx */
import { Button, Text, jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { IconifyIcon } from "./IconifyIcon"

export const TechTag = props => {
  const { name, iconifyName } = props
  return (
    <Link
      to={`/tags/${name}`}
      sx={{
        p: 2,
        alignItems: "center",
        display: "inline-block",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      <Button
        onClick={() => {}}
        variant="tag"
        sx={{ display: "flex", flexWrap: "nowrap", flexDirection: "row" }}
      >
        <Text sx={{ mr: 2 }}>{name}</Text>
        <IconifyIcon
          iconifyName={iconifyName}
          sx={{ width: 5, height: 5, alignSelf: "center" }}
        />
      </Button>
    </Link>
  )
}
TechTag.propTypes = {
  name: PropTypes.string.isRequired,
  iconifyName: PropTypes.string.isRequired,
}
