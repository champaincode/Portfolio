import React from 'react'
import { Typography, Box, Container } from '@mui/material'

import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from "./styles/skills.module.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height:"200px",
  color: theme.palette.text.secondary,
}));


const Footer = () => {
  return (
    <>

    <Container maxWidth sx={{
          display:"flex",
          alignContent:"space-around",
          flexDirection:"column",
          height: "150px",
          justifyContent:"center"
        
       }}> <Typography variant="h2" className='Skilles' align={"center"} color={"secondary"}>
      Footer
      </Typography>
    
     
      {/* <SpinningText className={styles.spiner}/> */}
    {/* <Box sx={{ display:"flex", justifyContent: "center"}}>
          <Grid container spacing={2}>
           
            <Grid item xs={12} md={4} sm={12}>
              <Item> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png" alt="" /></Item>
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid item xs={12} md={4}sm={12}>
              <Item>xs=6 md=4</Item>
            </Grid>
          </Grid>
        </Box> */}
    </Container>
    
       
      
        
       </>
  )
}

export default Footer