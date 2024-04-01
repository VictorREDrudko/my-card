import styled from "styled-components"

export const Button = styled.button.attrs((props)=>({
  type: "button"
}))<{isActive?: boolean}>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid #4E71FE;
  color: ${props => props.isActive ? "#FFFFFF" : "#4E71FE"};
  background-color: ${props => props.isActive ? "#4E71FE" : "#FFFFFF"};
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
`