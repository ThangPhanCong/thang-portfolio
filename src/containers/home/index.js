import styled from 'styled-components';
import Card from '../../commons/ThCard';
import CardItem from '../../commons/ThCard/ThCardItem';
import ThText from '../../commons/ThText';
import React, {useState, useEffect} from 'react';
import imgBackRound from '../../assets/background.jpg';
import backgroundProfile from '../../assets/profile.jpg';
import backgroundMusics from '../../assets/musics.jpg';
import backgroundTrips from '../../assets/trips.jpg';
import cardItemName from '../../assets/name.png';
import cardItemPresents from '../../assets/presents.png';
import cardItemClass from '../../assets/class.png';
import cardItemWork from '../../assets/work.png';
import imgKyoto from '../../assets/kyoto.jpg';
import imgMusicVn from '../../assets/music-vn.jpg';
import imgMusicEn from '../../assets/music-en.jpg';
import imgMusicJp from '../../assets/music-japan.jpg';
import imgOsaka from '../../assets/osaka.jpg';

import TH_CONSTANTS from '../../constants';
import {getTrips} from "../../firebase/trips";
import {useHistory} from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${imgBackRound});
    background-size: auto 100%;
    height: 100vh;
    flex: 1;
    background-repeat: no-repeat;
    background-position: center;
    justify-content: center;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
`;


export default function () {
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getTrips(trips => setTrips(trips));
  }, []);

  function moveToTrips(item) {
    const LINK_ID = `/trips/${item.title}`;

    history.push(LINK_ID, {item});
  }

  return (
    <Container>
      <CardContainer>
        <Card background={backgroundMusics} title={'Musics'}>
          <CardItem image={imgMusicVn} content={"VietNam"}/>
          <CardItem image={imgMusicJp} content={"Japan"}/>
          <CardItem image={imgMusicEn} content={"English"}/>
        </Card>
        <Card background={backgroundTrips} title={'Trips'}>
          {trips.map((item, index) => <CardItem image={item.background} key={index} content={item.title}
                                                moveToTrips={() => moveToTrips(item)}/>)}
        </Card>
        <Card background={backgroundProfile} title={'Profile'} isProfile={true}>
          <CardItem image={cardItemName} content={TH_CONSTANTS.profile.NAME} isProfile={true}/>
          <CardItem image={cardItemPresents} content={TH_CONSTANTS.profile.BIRTH_DAY} isProfile={true}/>
          <CardItem image={cardItemClass} content={TH_CONSTANTS.profile.CLASS} isProfile={true}/>
          <CardItem image={cardItemWork} content={TH_CONSTANTS.profile.JOB} isProfile={true}/>
          <ThText content={TH_CONSTANTS.profile.TITLE_LANGUAGE}/>
          <ThText content={TH_CONSTANTS.profile.LANGUAGE}/>
          <ThText content={TH_CONSTANTS.profile.TITLE_DEV_TOOLS}/>
          <ThText content={TH_CONSTANTS.profile.DEV_TOOLS}/>
        </Card>
      </CardContainer>

    </Container>
  )
}
