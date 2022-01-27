import styled from '@emotion/styled'
import { Avatar, Container, Paper, RadioGroup } from '@mui/material'

export const StyledContainer = styled(Container)`
    padding-top: 10%;
`

export const StyledAvatar = styled(Avatar)`
    background-color: #e7bb41;
    margin: 10px auto;
    width: 65px;
    height: 65px;
`

export const StyledPaper = styled(Paper)`
    padding: 30px;
`

export const StyledFormWrapper = styled.section`
    background-color: #201e50;
    min-height: 100vh;
    h2 {
        font-weight: bold;
        text-align: center;
        font-size: 28px;
        margin-top: 20px;
        margin-bottom: 7px;
    }
    h3 {
        font-weight: bold;
        align: center;
        font-size: 18px;
        margin-top: 10px;
    }
    h4 {
        text-align: left;
        font-size: 13px;
        line-height: 1.25;
        color: #707070;
    }
    h5 {
        font-weight: bold;
        align: center;
        font-size: 16px;
        margin-top: 10px;
    }
`

export const StyledRadioGroup = styled(RadioGroup)`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
`
