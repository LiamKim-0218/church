import * as React from 'react';
import Styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Llogo from "./Llogo.png";
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";


const navItems = ['환영합니다', '예배 시간', '찾아오시는 길', '교회 생활'];


export default function DrawerAppBar() {
    const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{background:'#fff'}}>
        <Toolbar>
        <LlogoBoxDiv
            onClick={()=>{
                navigate("/");
            }}>
          {/* <img src={Llogo} alt="Llogo" /> */}
          </LlogoBoxDiv>  
          
          <Box sx={{ justifyContent: 'flex-end', display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: '#0a0000' }}
                onClick={() => {
                  if (item === '환영합니다') navigate('/');
                  else if (item === '예배 시간') navigate('/time');
                  else if (item === '찾아오시는 길') navigate('/Road');
                  else if (item === '교회 생활') navigate('/');
                }}
              >
                {item}
              </Button>
             ))}
           </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

// const FooterLogoImg = Styled.img`
//   width: 100%;
//   height: 100%;  
// `

const LlogoBoxDiv = Styled.div`
  /* display: flex; */
  height: 60px;
  width: 180px;
  background-image:url(${Llogo});
  background-size : 180px;
  /* flex-direction: row; */
`


// const Llogo = Styled.img`
//       width:300px;
//     height:150px;
//     object-fit:cover;
// `;



// Llogo{
//     width:300px;
//     height:150px;
//     object-fit:cover;
//     align-items: center;
//     justify-content: flex-start;
// }

// const LogoimageDiv = Styled.div`
//   justify-content: space-between;
//   align-items: center;
//   display: flex;
//   height: 0;
//   justify-content: flex-start;
// `;


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

//     const drawerWidth = 240;
// const navItems = ['환영합니다', '예배 시간', '찾아오시는 길', '교회 생활'];

// function DrawerAppBar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const navigate = useNavigate()
//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

// //   const drawer = (
// //     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
// //       {/* <Typography variant="h6" sx={{ my: 2 }}>
// //         MUI
// //       </Typography> */}
// //       <Divider />
// //       <List>
// //         {navItems.map((item) => (
// //           <ListItem key={item} disablePadding>
// //             <ListItemButton sx={{ textAlign: 'center' }}>
// //               <ListItemText primary={item} />
// //             </ListItemButton>
// //           </ListItem>
// //         ))}
// //       </List>
// //     </Box>
// //   );


//   const container = window !== undefined ? () => window().document.body : undefined;
  

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             {/* <img src="logo192.png" alt="logo192" /> */}
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: '#0a0000' }}>
//                 {item}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//     </Box>
//   );
// }

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default DrawerAppBar;
