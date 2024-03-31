import styled from "styled-components"
import { Card } from "./card/Card"
import imgSahara from "../../assets/Rectangle.png"

export const Cards = () => {
  return (
    <StyledCards>
      <Card imgPath={imgSahara}
            title={"Headline"}
            text={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."} />
    </StyledCards>
  )
}

const StyledCards = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
`
