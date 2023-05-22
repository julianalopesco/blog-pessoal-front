import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
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
                        <Box mx={1} className='txtNavbar'>
                            <Typography variant="h6" color="inherit">
                                TEMAS
                            </Typography>
                        </Box>
                        <Box mx={1} className='txtNavbar' style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                CADASTRAR TEMA
                            </Typography>
                        </Box>
                        <Link to='/' className='linkNavbar'>
                            <Box mx={1} className='txtNavbar'>
                                <Typography variant="h6" color="inherit">
                                        LOGOUT
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
            </>
        )
}

export default Navbar;