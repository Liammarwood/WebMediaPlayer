import React from 'react';
import styled from 'styled-components';

const SongCard = () => {
    return(
        <div>
            <SongCover />
            <SongTitle >Song Title</SongTitle>
            <SongArtist>The Artist</SongArtist>
        </div>
    )
}

const SongTitle = styled.h1`
font-size: 24px
`
const SongArtist = styled.h1`
font-size: 14px
`
const SongCover = styled.div`
    width: 25vh;
    height: 25vh;
    background-color: grey;
    margin: 5vh;
    margin-bottom: 0;
`

export default SongCard;