import React from 'react';
import styled from 'styled-components';
import MediaControlBar from './MediaControlBar';
import SongCard from './SongCard';
import SongSlider from './SongSlider';
const PlayingCard = () => {
    return(
        <Card>
            <SongCard />
            <MediaControlBar/>
            <SongSlider songLength = {203}/>
        </Card>
            
    )
}

const Card = styled.div`
    width: fit-content;
    height: 60vh;
    margin-top: 10vh;
    margin-left: 5vw;
`

export default PlayingCard;