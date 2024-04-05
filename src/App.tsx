import styled from 'styled-components';
import imgSahara from "../src/assets/Rectangle.webp"
import { Card } from './components/card/Card';

function App() {
  return (
    <Cards className="App">
      <Card imgPath={imgSahara} title={"Headline"} text={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."} />
      <Card imgPath={imgSahara} title={"Headline"} text={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen. Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."} />
    </Cards>
  );
}

export default App;

const Cards = styled.div`
  background-color: #f4f3f3;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 20px;
`