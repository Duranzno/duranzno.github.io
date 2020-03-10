import styled from '@emotion/styled'

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 30px;

  grid-template-columns: repeat(auto-fill, minmax(${props => props.sx.minWidth}, 1fr));

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`
