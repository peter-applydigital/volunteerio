import styled from "@emotion/styled";
import MuiCard from "@mui/material/Card";
import MuiCardActions from "@mui/material/CardActions";

export const PageWrapper = styled.section`
  background-color: #f5f5f5;
  min-height: 100vh;
  text-align: left;
  h1 {
    padding: 0.25rem 0.5rem;
  }
  ul {
    margin-bottom: 0;
  }
`;

export const InnerTabPanel = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

export const Card = styled(MuiCard)`
  margin-bottom: 1.5rem;
  svg {
    margin-right: 0.25rem;
  }
`;

export const CardActions = styled(MuiCardActions)`
  padding: 0.5rem 1rem 1rem;
`;

export const JobKeyDetails = styled.div`
  margin: 1rem 0;
`;
