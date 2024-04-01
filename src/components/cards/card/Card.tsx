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
      <ImageCard src={props.imgPath} alt={"image"}/>
      <CardTitle>{props.title}</CardTitle>
      <CardText>{props.text}</CardText>
      <ContainerButton>
        <Button isActive>See more</Button>
        <Button>Save</Button>
      </ContainerButton>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  background-color: #FFFFFF;
  width: 300px;
  height: 350px;
  border-radius: 15px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
`

const ImageCard = styled.img`
  display: block;
  width: 280px;
  height: 170px;
  margin: 10px 10px 0 10px;
  border-radius: 10px;
`

const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 19.36px;
  margin: 20px;
`

const CardText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  margin: 0 20px;
`

const ContainerButton = styled.div`
  display: flex;
  gap: 13px;
  margin: 20px;
`