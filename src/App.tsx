import React from 'react';
import logo from './logo.svg';
import { Card } from './components/card/Card';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Container>
        <Card/>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
`