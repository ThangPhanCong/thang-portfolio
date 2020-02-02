import React from 'react';
import styled from "styled-components";
import imgFacebook from "../../assets/facebook.png";
import imgLinkedIn from "../../assets/linkedin.png";
import imgInstagram from "../../assets/instagram.png";
import TH_CONSTANTS from "../../constants";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export default function () {
  const {FACEBOOK, LINKEDIN, INSTAGRAM} = TH_CONSTANTS.profile;

  function navigate(url) {
    window.open(url, '_blank');
  }

  return (
    <Container>
      <Image src={imgFacebook} onClick={() => navigate(FACEBOOK)}/>
      <Image src={imgLinkedIn} onClick={() => navigate(LINKEDIN)}/>
      <Image src={imgInstagram} onClick={() => navigate(INSTAGRAM)}/>
    </Container>
  )
}
