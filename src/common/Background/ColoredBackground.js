/* eslint-disable react/prop-types */
import React from 'react'
import styled from '@emotion/styled'
import { convertHex } from '@utils'

const Radial = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: ${({ theme: { colors } }) => {
    console.log(colors)
    return `radial-gradient(closest-corner,${convertHex(colors.red, 0)}, 60%,${convertHex(colors.blue, 26)}),
    -webkit-linear-gradient(108deg, ${colors.skyBlue}, ${colors.darkBlue} 90%)`
  }};
`
const Lines = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB9JREFUeNpiZmBg6AZiDiBWZ4YyQMCOCcYA4kMAAQYAHyYCCUdxidgAAAAASUVORK5CYII=');
`

export const ColoredBackground = ({ children }) => {
  return (
    <>
      <Radial>
        <Lines>{children}</Lines>
      </Radial>
    </>
  )
}
