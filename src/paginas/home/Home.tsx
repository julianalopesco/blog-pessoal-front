import React, { useEffect } from 'react';
import './Home.css';
import Box from '@mui/material/Box';
import {Grid, Button, Typography} from '@material-ui/core';
import TabPostagens from '../../components/postagens/tabPostagens/TabPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function Home() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    useEffect(() => {
        if (token == "") {
            toast.error('🦄 Wow so easy!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            navigate("/login")
    
        }
    }, [token])
    
    return (
        // a função retorna apenas um elemento, portanto usa-se as divs/containers
        //a box é uma variavel que funciona como div, é uma div personalizável
        //p= padding
        <div>
                <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                    <Grid alignItems="center" item xs={6}>
                        <Box paddingX={20} >
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Bem vindo ao Clube do Livro!</Typography>
                            <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='subtitulo'>Expresse suas opiniões e amor pela literatura!</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Box marginRight={1}>
                                <ModalPostagem/>
                            </Box>
                            <Link to='/postagens'>
                                <Button variant="outlined" className='botao'>Ver Postagens</Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <img src ="https://i.imgur.com/ncCrfU2.jpg" alt="estante de livros" width={'100%'}/>
                    </Grid>
                    <Grid xs={12} className='postagens'>
                        <TabPostagens />
                    </Grid>
                </Grid>
        </div>
    )
}

export default Home;