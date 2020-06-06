import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {BsPlay} from 'react-icons/bs';
 
const MediaControls = (props) => {
    const theme = {size: props.size === "Small" ? `2vh` :`4vh`};
    const CircleButton = styled.div`
    height : ${props => props.theme.size};
    width : ${props => props.theme.size};
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    padding: 5px;
    `
    const Icon = styled(props.icon ? props.icon : BsPlay)`
    font-size: ${props => props.theme.size};
    `

    return(
        <ThemeProvider theme={theme}>
            <CircleButton onClick={() => console.log("")}>
                <Icon />
            </CircleButton>
        </ThemeProvider>
    )
}




export default MediaControls;