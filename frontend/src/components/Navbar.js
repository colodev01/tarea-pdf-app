import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import img from '../images/layout_set_logo.png';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#48c1f4 !important", display: 'flex'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={img} alt='poder_judicial_img' width={200} height={50}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Firma Ciudadana
          </Typography>
          <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                      >
                            <AccountCircle />
           </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}