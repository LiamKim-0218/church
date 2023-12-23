import Styled from "styled-components";
import DrawerAppBar from '../Appbar';
import Footer from "../components/Footer.jsx";
import React from "react";


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



const Time = () => {
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
        <DrawerAppBar />
        <WrapBox>
        <ContentBoxDiv>
        {/* <TitleBox miniTitle = "예배 시간"></TitleBox> */}
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
  };

  const WrapBox = Styled.div`
  width: 100%;
`;
const ContentBoxDiv = Styled.div`
margin-top: 6%;
  margin-bottom: 5%;
  padding : 3%
`;
  export default Time;

  