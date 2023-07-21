import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const StyleContainer = styled.div`
  height: 100%;
  >div {
    height: 100%;
  }

  .dados-title {
    margin: 25px 0 50px;
  }

  hr.MuiDivider-root.MuiDivider-fullWidth {
    margin: 15px 0;
  }

   //Layout Web
   @media screen and (min-width: 600px) {
    height: 450px;

    .MuiGrid-container > div {
      text-align: center;
    }

    .dados-title {
      height: 70px;
      display: flex;
      justify-content: center;

      h4, h5 {
        position: absolute;
        width: 700px;
        font-size: 30px;
        text-align: center;
      }
    }

  }
`;

export default StyleContainer;
