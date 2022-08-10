import React from 'react'
import { Typography, Box, Container } from '@mui/material'
import styles from './styles/portfolio.module.css'
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height:"200px",
  color: theme.palette.text.secondary,
}));

const Portfolio = () => {
  return (
    <>

<Container maxWidth      sx={{
      display:"flex",
      background: "black",
      alignContent:"space-around",
      flexDirection:"column",
      height: "800px",
      justifyContent:"center"
    
   }}> <Typography variant="h2" align={"center"} color={'white'}>
  Portfolio
  </Typography>
<Box sx={{ display:"flex", justifyContent: "center"}}>
      <Grid container align={"center"} spacing={4}>
       
        <Grid item xs={12} md={3} sm={12}>
        <div class="card">
  <div class="card-info">
    <p class="title">Viewstream</p>
    <p class="subtitle">TMDB</p>
  </div>
  <div class="card-bio">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
        </Grid>
        <Grid item xs={12} md={4} sm={12}>
             <div class="card">
  <div class="card-info">
    <p class="title">John Doe</p>
    <p class="subtitle">Web Dev</p>
  </div>
  <div class="card-bio">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
        </Grid>
        <Grid item xs={12} md={4}sm={12}>
        <div class="card">
  <div class="card-info">
    <p class="title">John Doe</p>
    <p class="subtitle">Web Dev</p>
  </div>
  <div class="card-bio">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
        </Grid>
      </Grid>
    </Box>
</Container>

   
  
    
   </>
  )
}

export default Portfolio

