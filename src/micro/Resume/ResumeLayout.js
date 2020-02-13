import styled from "@emotion/styled"

export const Layout = styled.body`
  font-family: "Khula", Arial, sans-serif;
  background: #eee;
  @media print {
    background: #fff;
  }
  font-size: 12px;
  & * {
    margin-bottom: 0.5px;
  }
`
