import React from 'react';
import './Home.css';
import {Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {Grid, Paper} from '@material-ui/core';


function Home() {
    return (
        // a função retorna apenas um elemento, portanto usa-se as divs/containers
        //a box é uma variavel que funciona como div, é uma div personalizável
        // o grid aplica responsividade, através de colunas. xs > extra small, md > medium
       <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Paper style={{ height: "100vh", background: "lightgrey" }}/>
          </Grid>

          <Grid item container direction="column" xs={12} sm={4} spacing={2}>
            <Grid item>
              <Paper style={{ height: "49vh", background: "orange" }} />
            </Grid>
            <Grid item>
              <Paper style={{ height: "49vh", background: "green" }} />
            </Grid>

          </Grid>
        </Grid>
       </div>
    )
}

export default Home;