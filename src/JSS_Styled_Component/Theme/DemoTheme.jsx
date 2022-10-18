import React from "react";
import styled, { ThemeProvider } from "styled-components";
export const DemoTheme = (propsComponent) => {
  const configDarkTheme = {
    backgroundColor: "red",
    color: "black",
  };

  const configLightTheme ={
      backgroundColor:"white",
      color:"orange",
  }
//  nó sẽ ăn theo thằng theme mà mình định nghĩa 
  const DivStyle = styled.div`
    color: ${(props) => props.theme.backgroundColor};
    padding: 5%;
    background-color: ${(props) => props.theme.color};
  `;
  return (
    <ThemeProvider theme={configLightTheme}>
      <DivStyle>
        hello xin chao mn 
      </DivStyle>
    </ThemeProvider>
  );
};
