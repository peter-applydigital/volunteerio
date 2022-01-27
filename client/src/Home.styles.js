import styled from "@emotion/styled";
import MuiCard from "@mui/material/Card";

export const HomeWrapper = styled.section`
  background-color: #eee;
  min-height: 100vh;
  text-align: left;
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

export const JobKeyDetails = styled.div`
  margin: 1rem 0;
`;
