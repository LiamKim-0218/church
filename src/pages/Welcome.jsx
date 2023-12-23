import './App.css';
import Styled from "styled-components";
import DrawerAppBar from '../Appbar';
import Footer from "../components/Footer.jsx";
import React from "react";


export default function Welcome(){
    return(
        <>
        <WrapBox>
            <DrawerAppBar/>
            <WelcomecontentBoxDiv>
            <h1>환영합니다</h1>

            <WelcomeDiv>
            {/* <WelcomeImg src={Llogo} alt = "Llogo" /> */}
            </WelcomeDiv>

            </WelcomecontentBoxDiv>

            <ContentBoxDiv>
            <h1>담임 목사님 소개</h1>

            <WelcomeDiv>
            {/* <WelcomeIntroImg src={Llogo} alt = "Llogo" /> */}
            </WelcomeDiv>
            
            </ContentBoxDiv>

            <ContentBoxDiv>
            <h1>참조은 교회의 사명</h1>

            <WelcomeDiv>
            {/* <WelcomeMissionImg src={Llogo} alt = "Llogo" /> */}
            </WelcomeDiv>
            
            </ContentBoxDiv>
            
            <ContentBoxDiv>
            <h1>슬로건</h1>

            <WelcomeDiv>
            {/* <WelcomeSloganImg src={Llogo} alt = "Llogo" /> */}
            </WelcomeDiv>

            </ContentBoxDiv>

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

const WelcomecontentBoxDiv = Styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-direction : column;
  width:100%;
  min-height: 100px;
  padding: 1%;
  padding-bottom: 200px;
`;


const ContentBoxDiv = Styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-direction : column;
  width:100%;
  min-height: 100px;
  padding: 1%;
  padding-top: 100px;
`;

const WelcomeDiv = Styled.div`
justify-content: center; 
  align-items: center; 
  margin : 1%;
  padding: 1%;
  width: 200px;
  height: auto; 
`

const WelcomeImg = Styled.img`
  width: 100%;
  height: 100%;  
`

const WelcomeIntroImg = Styled.img`
  width: 100%;
  height: 100%;  
`

const WelcomeMissionImg = Styled.img`
  width: 100%;
  height: 100%;  
`

const WelcomeSloganImg = Styled.img`
  width: 100%;
  height: 100%;  
`
