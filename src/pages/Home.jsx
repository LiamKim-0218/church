// import logo from './logo.svg';
import './App.css';
import Styled from "styled-components";

import DrawerAppBar from '../Appbar';
import Banner from '../Banner';
import Album from '../Album';
import Footer from 'C:/Users/namkyun/Desktop/first_pj/my-app/src/components/Footer';


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


export default function Home() {
    const tableInfo = [
        {
          name: "주일예배",
          time: "오전9시",
          location: "본당",
          user: "ㅇㅇㅇ목사님",
        },
        {
          name: "수요예배",
          time: "오전9시",
          location: "본당",
          user: "ㅇㅇㅇ목사님",
        },
        {
          name: "금요철야",
          time: "오전9시",
          location: "본당",
          user: "ㅇㅇㅇ목사님",
        },
        {
          name: "어린이예배",
          time: "오전9시",
          location: "본당",
          user: "ㅇㅇㅇ목사님",
        },
        {
          name: "새벽예배",
          time: "오전9시",
          location: "본당",
          user: "ㅇㅇㅇ목사님",
        },
      ];

  return (
    <>
        <WrapBox>
        <DrawerAppBar />

            <div>
                {/* <BannerDiv> */}
                    <Banner />
                {/* </BannerDiv> */}
            </div>

            <ContentBoxDiv>
                <h1>참조은 story</h1>

                {/* <AlbumImgDiv> */}
                    <Album />
                {/* </AlbumImgDiv> */}

            </ContentBoxDiv>

            <ContentBoxDiv>
          <h1>예배시간 안내</h1>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>구분</TableCell>
                  <TableCell align="right">예배시간</TableCell>
                  <TableCell align="right">예배장소</TableCell>
                  <TableCell align="right">담당교역자</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableInfo.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.time}</TableCell>
                    <TableCell align="right">{row.location}</TableCell>
                    <TableCell align="right">{row.user}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ContentBoxDiv>

        </WrapBox>
        <Footer />
        </>
  );
}

const WrapBox = Styled.div`
  width: 100%;
  padding-top: 64px;
  overflow-x: hidden;
`;

const ContentBoxDiv = Styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  padding : 3%
`;

/* export default Home; */

const BannerDiv = Styled.div`
  width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
`;






{/* 
      {
        <AppBarDiv>
          <DrawerAppBar />
        </AppBarDiv>
      }
      <WrapBox>

        <BannerDiv>

          <Banner />


        </BannerDiv>

        <AlbumDiv>
          <AlbumTitleDiv>

          </AlbumTitleDiv>
          <AlbumImageDiv>

          </AlbumImageDiv>
        </AlbumDiv>

        <WorshipTimeDiv>
          <WorshipTimeTitleDiv>

          </WorshipTimeTitleDiv>
          <WorshipTimeTableDiv>

          </WorshipTimeTableDiv>
        </WorshipTimeDiv>

        <FooterDiv>

        </FooterDiv>

      </WrapBox>
    </>
  );
}

const AppBarDiv = Styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color:#fff;
  border: 1px solid red;
`;

// const LogoimageDiv =Styled.div`
//   width: calc(100% - 40px);
//   padding: 20px;
//   display: flex;
//   justify-content: space-between;
//   position: fixed;
//   background-color:#fff;
//   border: 1px solid red;

// `
// const CoreMenuListDiv =Styled.div`
//   width: calc(100% - 40px);
//   padding: 20px;
//   display: flex;
//   justify-content: space-between;
//   position: fixed;
//   background-color:#fff;
//   border: 1px solid red;

// `
// const MenuDiv =Styled.div`
//   width: calc(100% - 40px);
//   padding: 20px;
//   display: flex;
//   justify-content: space-between;
//   position: fixed;
//   background-color:#fff;
//   border: 1px solid red;
// `
const WrapBox = Styled.div`
  width: 100%;
  padding-top: 80px;
  border: 1px solid red;
`;

const BannerDiv = Styled.div`
  width: 100%;
  padding-top :10%
  border: 1px solid red;
`;

const AlbumDiv = Styled.div`
  width: 100%;
  padding-top: 48px;
  border: 1px solid red;
`;
const AlbumTitleDiv = Styled.div`
  width: 100%;
  padding-top: 48px;
  border: 1px solid red;
`;
const AlbumImageDiv = Styled.div`
  width: 100%;
  padding-top: 48px;
  border: 1px solid red;
`;

const WorshipTimeDiv = Styled.div`
  width: 100%;
  padding-top: 48px;
  border: 1px solid red;
`;
const WorshipTimeTitleDiv = Styled.div`
  width: 100%;
  padding-top: 48px;
  border: 1px solid red;
`;
const WorshipTimeTableDiv = Styled.div`
  width: 100%;
  padding-top: 48px;
  border: 1px solid red;
`;

const FooterDiv = Styled.div`
  width: 100%;
  padding-top: 48px;
  border: 1px solid red;
`;

const TitleImgDiv = Styled.div`
  width:243px;
  height:177px;
  background: #ffffff;
  margin:8px;
  padding: 10px;
  
`;

export default Home; */}
