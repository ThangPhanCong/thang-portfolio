import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    margin-top: 15px;
`;

export default function (props) {
  return (
    <Container>{props.content}</Container>
  )
}
