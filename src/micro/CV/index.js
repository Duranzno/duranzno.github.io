import styled from "@emotion/styled"
import { Box } from "theme-ui"

export const Body = styled(Box)`
  background: #fff;
  @media print {  background: #fff;}
  font-size: 12px;
  margin-top: 0.5px;
  margin-bottom: 0.5px;
  width: 800px;
  margin: 20px auto 20px auto;
  @media print {
    margin: 0;
  }
  /* border-bottom: solid 20px $info; */
}
`
