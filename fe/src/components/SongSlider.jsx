import React, { useState } from 'react';
import styled from 'styled-components';

const SongSlider = ({songLength}) => {
    const [time, setTime] = useState(0);
    const getTime = () => {
        const mins = Math.floor(time / 60);
        let secs = (time - (mins * 60)).toString();
        secs = secs < 10 ? "0"+secs : secs;
        return (mins.toString() + ":" + secs);
    }
    return(
        <Container>
            <Time>{getTime()}</Time>
            <Slider id = "songTimeSlider" onChange = {() => setTime(document.getElementById("songTimeSlider").value)} type="range" defaultValue = {time}  min="1" max={songLength} />
            <Time>3:23</Time>
        </Container>
       
    )
}
const Container = styled.div`
margin-top: 5vh;
`
const Time = styled.h1`
font-size: 12px;
display: inline;
`
const Slider = styled.input`
-webkit-appearance: none;
width: 80%;
border-radius: 5px;
background: #d3d3d3;
outline: none;
opacity: 1;
-webkit-transition: .2s;
transition: opacity .2s;
`

export default SongSlider;