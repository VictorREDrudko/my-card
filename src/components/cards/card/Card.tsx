import styled from "styled-components"
import { Button } from "../../../components/Button"

type CardPropsType = {
  imgPath: string
  title: string
  text: string
}

export const Card = (props: CardPropsType) => {
  return (
    <StyledCard>
      <CardImg src={props.imgPath} alt="image"/>
      <CardTitle>{props.title}</CardTitle>
      <CardText>{props.text}</CardText>
      <Button>See more</Button>
      <Button>Save</Button>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  background-color: #FFFFFF;
  width: 300px;
  height: 350px;
  border-radius: 15px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin: 10px;
`

const CardImg = styled.img`

`

const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 19.36px;
`

const CardText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
`
