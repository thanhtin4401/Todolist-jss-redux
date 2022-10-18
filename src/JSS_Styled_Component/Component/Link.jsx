import styled from "styled-components";
export const link = ({ className, children, ...restProps }) => {
  <a className={className} href="">
    {children}
  </a>;
};

export const StyledLink = styled(link)`
  background-color: green;
  font-size: 20px;
  color: black !important;
`;

// =============== Truyen linh dong props
export const textfield = styled.input`
/* Nhận trực tiếp giá trị được truyền vào từ biến props làm giá trị */
 color:${props => props.inputColor || 'red'}
`
