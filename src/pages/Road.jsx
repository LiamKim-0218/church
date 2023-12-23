import './App.css';
import Styled from "styled-components";
import DrawerAppBar from '../Appbar';
import Footer from "../components/Footer.jsx";
import React from "react";
import Kakao from "C:/Users/namkyun/Desktop/first_pj/my-app/src/components/KakaoMap.jsx"


export default function Road(){
    return(
        <>
        <WrapBox>
            <DrawerAppBar/>

            <RoadBoxDiv>
            <h1>찾아오시는 길</h1>
            </RoadBoxDiv>

            <KakaoMapDiv>
                <Kakao />
            {/* <WelcomeImg src={Llogo} alt = "Llogo" /> */}
            </KakaoMapDiv>

            <BusDiv>
                    {/*이미지로 넣을지 어떻게 넣을지를 몰라서 대기! */}
            </BusDiv>

        </WrapBox>
        <Footer />
        </>
    )
}

const WrapBox = Styled.div`
  width: 100%;
  padding-top: 64px;
  overflow-x: hidden;
`;

const RoadBoxDiv = Styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-direction : column;
  width:100%;
  min-height: 100px;
  padding: 1%;
  padding-bottom: 200px;
`;

const KakaoMapDiv = Styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-direction : column;
  width:100%;
  padding: 1%;
`;

const BusDiv = Styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-direction : column;
  width:100%;
  min-height: 100px;
  /* padding: 1%; */
  padding-bottom: 64px;
`;

