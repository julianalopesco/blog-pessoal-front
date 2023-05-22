import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box, Grid} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagens from '../listaPostagens/ListaPostagens';
import './TabPostagens.css';


function TabPostagens() {

    // função responsável por alterar o valor do use state, armazena o valor do clique na variavel e aciona o set value
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      {/* container das abas */}
      <TabContext value={value}>
        <AppBar position="static"  className='tabPost'>
          <Tabs centered indicatorColor="secondary" onChange={handleChange}  className='txtPost'> 
            <Tab label="Todas as postagens" value="1" className='txtValue'/>
            <Tab label="Sobre" value="2"className='txtValue'/>
          </Tabs>
        </AppBar>
        {/* o valor define para onde as tabs irão direcionar */}
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagens />
          </Box>
        </TabPanel>
        <Box display="flex" justifyContent="center" className="txtSobre" style={{ width: '50%', margin: '0 auto' }}>
          <TabPanel value="2">
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre o projeto:</Typography>
            <Typography variant="body1" gutterBottom color="textPrimary">
                <p className="txtSobre">Clube do Livro é um projeto de Blog Pessoal realizado dentro do bootcamp da generation, durante o terceiro módulo</p>
                <p className="txtSobre">Esse projeto une o backend, onde foram utilizados Java e o SpringBoot Framework, gerenciamento de banco de dados com CRUD e requisições http, com o Front-End, que une JavaScript, CSS e HTML para criar páginas estilizadas, funcionais e responsivas, capazes também de consumir a api de back-end</p>
                <p className="txtSobre">Clube do livro foi escolhido como tema do projeto por ser um assunto que interessa muito a desenvolvedora, Juliana Lopes, e as resenhas foram escritas por ela também </p> 
            </Typography>
          </TabPanel>
        </Box>
      </TabContext>
    </>
  );
}

export default TabPostagens ;