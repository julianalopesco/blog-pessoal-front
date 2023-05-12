import React from 'react';
import './Home.css';
import {Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {Grid} from '@mui/material'

function Home() {
    return (
        // a função retorna apenas um elemento, portanto usa-se as divs/containers
        //a box é uma variavel que funciona como div, é uma div personalizável
        // o grid aplia responsividade, através de colunas. xs > extra small, md > medium
        <Box
        display='flex'
        justifyContent='center'
      >
        <div>
            <Grid xs={10} md={6}>
          <Typography align='center' variant='h4'>Clube do livro</Typography>
          <h1 className='texto'>Clube do Livro</h1>
          <AddBoxIcon/>
          <img className="imgHome" src="src/assets/estante.jpg" alt="estante"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere id voluptatum unde a. Hic nam excepturi, voluptate odit placeat minima deleniti eligendi dicta optio ipsa unde doloribus omnis sequi alias neque, vel beatae magnam nihil! In ipsum quasi doloremque dolore sint quod quos animi, tenetur porro! Natus, earum saepe.</p>
          </Grid>
          </div>
      </Box>
    )
}

export default Home;