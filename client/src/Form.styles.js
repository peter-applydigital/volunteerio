import styled from "@emotion/styled";
import { Avatar, Container } from '@mui/material';

export const StyledAvatar = styled(Avatar)`
    background-color: #E7BB41;
`;

export const StyledFormWrapper = styled.section`
    background-color: #201E50;
    min-height: 100vh;
    h2 {
        font-weight: bold;
        align: center;
        font-size: 28px;
        margin-top: 20px;
        margin-bottom: 7px;
    }
    h3 {
        font-weight: bold;
        align: center;
        font-size: 20px;
    }
    h4 { 
        text-align: left;
        font-size: 13px;
        line-height: 1.25;
        color: #707070;
    }
`;

export const StyledContainer = styled(Container)`
 padding-top: 120px;
`;
