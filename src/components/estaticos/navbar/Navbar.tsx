import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import useLocalStorage

from 'react-use-localstorage';
function Navbar() {

    const [token,setToken] = useLocalStorage('token');
    let history = useNavigate();

    function goLogout(){
        setToken('') //exclui o token no logout
        alert("Usuario deslogado")
        history("/login")
    }
        return (
            <>
                <AppBar position="static" className='navbar'>
                <Toolbar variant="dense">
                    <Box className='cursor' >
                        <Typography variant="h5" color="inherit">
                            Clube do Livro
                        </Typography>
                    </Box>
                    
                    <Box display="flex" justifyContent="flex-end" className='txtNavbar' style={{ flexGrow: 1 }}>
                        <Link to='/home' className='linkNavbar'>
                        <Box mx={1} className='txtNavbar'>
                            <Typography variant="h6" color="inherit">
                                HOME
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/postagens' className='linkNavbar'>
                        <Box mx={1} className='txtNavbar'>
                            <Typography variant="h6" color="inherit">
                                POSTS
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/temas' className='linkNavbar'>
                        <Box mx={1} className='txtNavbar'>
                            <Typography variant="h6" color="inherit">
                                TEMAS
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/formularioTema' className='linkNavbar'>
                        <Box mx={1} className='txtNavbar' style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                CADASTRAR TEMA
                            </Typography>
                        </Box>
                        </Link>
                            <Box mx={1} className='txtNavbar' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                        LOGOUT
                                </Typography>
                            </Box>
                    </Box>

                </Toolbar>
            </AppBar>
            </>
        )
}

export default Navbar;