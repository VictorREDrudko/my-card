import styled from "styled-components"
import { Button } from "../Button"


type CardPropsType = {
  imgPath: string
  title: string
  text: string
}

export const Card = (props: CardPropsType) => {
  return (
    <StyledCard>
      <ImageCard src={props.imgPath} alt={"image"}/>
      <ContentWrapper>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.text}</CardText>
        <ContainerButton>
          <Button isActive>See more</Button>
          <Button>Save</Button>
        </ContainerButton>
      </ContentWrapper>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  display: inline-block;
  background-color: #FFFFFF;
  max-width: 300px;
  border-radius: 15px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
`

const ImageCard = styled.img`
  display: block;
  border-radius: 10px;
  max-height: 170px;
  object-fit: cover;
`

const ContentWrapper = styled.div`
  padding: 20px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: red;
`

const CardText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  margin: 20px 0;
  flex-grow: 1;
`

const ContainerButton = styled.div`
  display: flex;
  gap: 13px;
`