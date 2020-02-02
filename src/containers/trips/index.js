import React from "react";
import Home from "../home";
import ThModal from "../../commons/ThModal";
import styled from 'styled-components';

const Container = styled.div`
    flex-direction: column;
    display: flex;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto;
    align-items: center;
    flex-wrap: wrap;
    height: 500px;
`;

const Image = styled.img`
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
        width: 300px !important;

    &:hover {
       cursor: pointer;
    }
`;

const ImageItem = styled.div`
    height: 200px;
    padding: 3px;
`;

const MessageNull = styled.div`
  text-align: center;
`;

function NullImages() {
  return (
    <MessageNull>Is Updating!</MessageNull>
  )
}

export default function (props) {
  const {state} = props.location;
  const images = state.item.images || [];

  return (
    <Container>
      <ThModal isShowModal={true}>
        {
          !images.length ? NullImages() :
            <ImageContainer>
              {images.map(img => <ImageItem>
                <Image src={img}/>
              </ImageItem>)}
            </ImageContainer>
        }
      </ThModal>
    </Container>
  )
}
