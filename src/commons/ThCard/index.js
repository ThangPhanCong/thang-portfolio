import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 750px;
    justify-content: center;
`;

const CardContent = styled.div`
    // background-image: url(${props => props.background});
    background: grey;
    opacity: 0.8;
    background-position: center center;
    background-size: cover;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin: 0 40px 0 40px;
    height: 100%;
    border: 3px solid #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.isProfile ? "center" : "normal"}
    padding: 25px;
`;

const CardTitle = styled.h1`
    text-align: center;
    text-shadow: 1px 1px 2px #FFF, 0 0 1em #FFF, 0 0 0.2em #FFF;
`;

export default function (props) {

  return (
    <Container>
      <CardTitle>{props.title}</CardTitle>
      <CardContent background={props.background} isProfile={props.isProfile}>{props.children}</CardContent>
    </Container>
  )
}
