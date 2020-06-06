import React from 'react';
import styled from 'styled-components';
import MediaControls from './MediaControls';
import { FiPlay, FiSkipForward, FiShuffle, FiRepeat, FiSkipBack } from 'react-icons/fi'

const MediaControlBar = () =>{

    return(
        <ControlBar>
            <MediaControls size="Small" icon = {FiRepeat} />
            <MediaControls size="Small" icon = {FiSkipBack} />
            <MediaControls size="Large" icon = {FiPlay} />
            <MediaControls size="Small" icon = {FiSkipForward} />
            <MediaControls size="Small" icon = {FiShuffle} />
        </ControlBar>
    )
}

const ControlBar = styled.div`
    width: fit-content;
    margin: auto;
`
export default MediaControlBar;