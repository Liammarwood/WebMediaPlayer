import React from 'react';
import './App.css';
import PlayingCard from './components/PlayingCard';
import styled from 'styled-components';


const App = () => (
  <Container className="App">
    <PlayingCard />
  </Container>
)

const Container = styled.div`
width:80vw;
height:80vh;
border: 1px solid black;
margin: auto;
margin-top: 10vh;
`

export default App;
