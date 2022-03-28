import React from 'react';
import {  Grid, Box } from '@mui/material';
import Container from '@mui/material/Container';



import { Link } from 'react-router-dom';

const Footer = () => {
  return (
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
  )
}

export default Footer