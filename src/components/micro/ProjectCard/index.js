import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import { useSpring, animated as a } from 'react-spring'
import { Back } from './BackCard'
import { Front } from './FrontCard'
import './a.css'

const DELAY = 100
export const ProjectCard = ({ project }) => {
  const [flipped, set] = useState(false)
  const [delayHandler, setDelayHandler] = useState(null)

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
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
        class="c back"
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
        }}
      >
        <Back project={project} flipped={false} />
      </a.div>
      <a.div
        class="c front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`),
        }}
      >
        <Front project={project} flipped={false} />
      </a.div>
    </Box>
  )
}
ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
}
