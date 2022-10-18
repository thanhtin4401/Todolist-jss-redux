import styled from "styled-components";
export const Button = styled.button`
  color: blue;
  /* check nếu có primary sẽ là blue chuyển props trông JSS */
  background-color: ${props=>props.primary ? "blue" : "orange"};
  opacity: 1;
  font-size: 20px;
  transition: all 0.3s ease;
  &:hover{
    opacity: 0.5;
    color:white;
    background-color: black;
  }
`
// ================= extending =========================
export const SmallButton = styled(Button)`
background-color: black;
color:green;
`
