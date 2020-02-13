import React from "react"
import PropTypes from "prop-types"
import { Flex, Box, Heading } from "theme-ui"
import { Card } from "./Post.styles"
import { IconifyLink } from "../Icons/IconifyLink"
import { EllipsisHeading } from "../Card"
export const MorePosts = ({ number, url }) => (
  // eslint-disable-next-line no-undef
  <Card onClick={() => window.open(url, "_blank")} sx={{ px: 4, pb: 4, pt: 2 }}>
    <Flex
      sx={{
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <EllipsisHeading sx={{ fontSize: 5, my: 2 }}>
          Hooray! &nbsp;
          <span role="img" aria-label="party">
            🎉
          </span>
        </EllipsisHeading>
        <Heading
          sx={{ lineHeight: 1.5 }}
        >{`There are ${number} more posts!`}</Heading>
      </Box>
      <Heading color="primary" mt={5} textAlign="right">
        Go to Blog &nbsp;
        <IconifyLink
          sx={{ width: 3, height: 3 }}
          iconifyName="mdi-arrow-right"
          name=""
        />
      </Heading>
    </Flex>
  </Card>
)

MorePosts.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  url: PropTypes.string.isRequired,
}

MorePosts.defaultProps = {
  number: "many",
}
