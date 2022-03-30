import React, {useState} from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Button} from '@mui/material';

import { Link } from 'react-router-dom';

import imgLogo from '../images/logo.jpg';

const Header = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const leave = () =>{
    localStorage.clear()
  }

  return (
    <header className='App'>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
              <img src={imgLogo} alt='logo' width="50" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Agendar cita</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Mis citas</Typography>
                  </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              Clinica my pets
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  <Link style={{ textDecoration: "none", color: 'white' }} to='/Home'>
                    Home
                  </Link>
                </Button>
                
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  <Link style={{ textDecoration: "none", color: 'white' }} to='/Home/AgendarCita'>
                    Agendar cita
                  </Link>
                </Button>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  <Link style={{ textDecoration: "none", color: 'white' }} to='/Home/MisCitas'>
                    Mis citas
                  </Link>
                </Button>

            </Box>
                <Button
                  onClick={leave}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  <Link style={{ textDecoration: "none", color: 'white' }} to='/'>
                    Salir
                  </Link>
                </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  )
}

export default Header