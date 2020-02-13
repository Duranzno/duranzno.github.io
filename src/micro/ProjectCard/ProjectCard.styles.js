import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Card } from "theme-ui"

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-content: baseline;
  width: 300px;
  height: 300px;
  max-width: 300px;
  max-height: 300px;
  text-align: left;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: all 0.4s ease-in-out;
  border-radius: 8px;
  background: ${props => props.theme.colors.background};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  cursor: ${props => (props.onClick ? "pointer" : "default")};

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`
export const ProjectDefaultProps = {
  name: "",
  description: "",
  id: "",
  blurb: "",
  projectUrl: "",
  publishedDate: "",
  repositoryUrl: "",
  stack: [],
  logo: { file: { url: "" } },
  screenshots: [{ file: { url: "" } }],
  type: [],
}
export const ProjectPropTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    blurb: PropTypes.string,
    projectUrl: PropTypes.string,
    publishedDate: PropTypes.string,
    repositoryUrl: PropTypes.string,
    logo: PropTypes.object,
    stack: PropTypes.array,
    screenshots: PropTypes.array,
    type: PropTypes.object,
  }).isRequired,
}
