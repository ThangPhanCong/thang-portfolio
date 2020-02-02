import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex-direction: row;
    display: flex;
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px;
    &:hover {
      background: #FFF;
      cursor: ${props => props.isProfile ? "normal" : "pointer"};
    };
`;

const Image = styled.img`
    object-fit: contain;
    border-radius: 5px;
    box-shadow: 1px 2px 1px #f7f7f7;
    width: ${props => props.isProfile ? "" : "100px"};
    height: ${props => props.isProfile ? "" : "70px"};
`;

const Content = styled.div`
      margin-left: 15px;
`;

export default function (props) {
  return (
    <Container isProfile={props.isProfile} onClick={props.moveToTrips}>
      <Image src={props.image} isProfile={props.isProfile}/>
      <Content>{props.content}</Content>
    </Container>
  )
}
