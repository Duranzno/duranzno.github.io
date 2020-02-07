import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import { useSpring, animated as a } from 'react-spring'
import { BackCard } from './BackCard'
import { FrontCard } from './FrontCard'

const DELAY = 100
export const ProjectCard = ({ project }) => {
  const [flipped, set] = useState(false)
  const [delayHandler, setDelayHandler] = useState(null)

  const { transform, opacity } = useSpring({
    minWidth: '100%',
    willChange: 'transform, opacity',
    cursor: 'pointer',

    mixBlendMode: 'multiply',
    opacity: flipped ? 1 : 0,
    transform: `rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  const handleMouseEnter = () => {
    clearTimeout(delayHandler)
    setDelayHandler(setTimeout(() => set(true), DELAY))
  }

  const handleMouseLeave = () => {
    clearTimeout(delayHandler)
    setDelayHandler(setTimeout(() => set(false), DELAY))
  }
  return (
    <Box
      className="project-card"
      sx={{ display: 'flex', direction: 'row', width: '750px', justifyContent: 'space-between' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a.div
        className="c back"
        style={{
          position: 'unset',
          opacity: opacity.interpolate(o => 1 - o),
          transform,
        }}
      >
        <BackCard project={project} flipped={false} />
      </a.div>
      <a.div
        className="c front"
        style={{
          position: 'absolute',
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`),
        }}
      >
        <FrontCard project={project} flipped={false} />
      </a.div>
    </Box>
  )
}
ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
}
