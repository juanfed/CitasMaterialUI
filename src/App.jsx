
import { Button, Grid, FormGroup, InputLabel, Input, Select, FormControl, TextareaAutosize } from '@mui/material';
import React, {useState} from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

import imgLogo from './images/logo.jpg';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';


function App() {

  const pages = ['Home', 'Agendar cita', 'Mis citas'];
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
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
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link style={{ textDecoration: "none", color: 'white' }} to={`/${page}`}>
                      {page}
                    </Link>
                  </Button>))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <main>
        <section>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            paddingTop="2rem"
            paddingLeft="4rem"
            paddingBottom="4rem"
          >
            <Grid container maxWidth="sm">
              <Grid item md={8}>
                <FormGroup>
                  <InputLabel htmlFor='name'>Nombre: </InputLabel>
                  <Input id='name' type='text' name='name' placeholder='Ingrese su nombre' />
                  <br />
                  <InputLabel htmlFor='lastName'>Apellido: </InputLabel>
                  <Input id='lastName' type='text' name='lastName' placeholder='Ingrese su apellido' />
                  <br />
                  <InputLabel htmlFor='id'>Cedula: </InputLabel>
                  <Input id='id' type='number' name='id' />
                  <br />
                  <InputLabel htmlFor='phone'>Telefono: </InputLabel>
                  <Input id='phone' type='number' name='number' />
                  <br />
                  <InputLabel htmlFor='email'>Email: </InputLabel>
                  <Input id='email' type='email' name='email' placeholder='Ingrese su correo electronico' />
                  <br />
                  <br />
                  <InputLabel htmlFor='petName'>Nombre mascota</InputLabel>
                  <Input id='petName' type='text' placeholder='Nombre de mascota' />
                  <br />
                  <InputLabel htmlFor='typePet'>Tipo de mascota</InputLabel>
                  <Input id='petName' type='text' placeholder='Tipo de mascota' />
                  <br />
                  <FormControl>
                    <InputLabel htmlFor='doctor'>Doctor</InputLabel>
                    <Select id='doctor' label="doctor">
                      <MenuItem value={"Karen Ortiz"}>Karen Ortiz</MenuItem>
                      <MenuItem value={"Jaun Camilo"}>Juan Camilo</MenuItem>
                      <MenuItem value={"Alexandra Rodriguez"}>Alexandra Rodriguez</MenuItem>
                    </Select>
                  </FormControl>
                  <InputLabel htmlFor='date'>Días disponibles: </InputLabel>
                  <Input id='date' type='date' />
                  <br />
                  <InputLabel htmlFor='hour'>Hora cita: </InputLabel>
                  <Input id='hour' type='time'></Input>
                  <br />
                  <InputLabel htmlFor='symptom'>Sintomas</InputLabel>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={5}
                    maxRows={6}
                    placeholder="Descricción de los sintomas"
                    style={{ width: 200 }}
                  />
                  <br /><br />
                  <Button variant="contained" color="success" type="submit" endIcon={<SendIcon />}>
                    Agendar
                  </Button>
                </FormGroup>
              </Grid>
            </Grid>
          </Box>
        </section>
      </main>
      <footer>
        <Box
          py={{ xs: 5, sm: 3 }}
          bgcolor="text.secondary"
          color="white"
          position="relative"
          bottom="0"
          width="100%"
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Help</Box>
                <Box>
                  <Link to="/" style={{ color: "white" }}>
                    Contact
                  </Link>
                </Box>
                <Box>
                  <Link to="/" style={{ color: "white" }}>
                    Support
                  </Link>
                </Box>
                <Box>
                  <Link to="/" style={{ color: "white" }}>
                    Privacy
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Account</Box>
                <Box>
                  <Link to="/" style={{ color: "white" }}>
                    Login
                  </Link>
                </Box>
                <Box>
                  <Link to="/" style={{ color: "white" }}>
                    Register
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Messages</Box>
                <Box>
                  <Link to="/" style={{ color: "white" }}>
                    Backup
                  </Link>
                </Box>
                <Box>
                  <Link to="/" style={{ color: "white" }}>
                    History
                  </Link>
                </Box>
                <Box>
                  <Link to="/" style={{ color: "white" }}>
                    Roll
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    </div>
  );
}

export default App;
