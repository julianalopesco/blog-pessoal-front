import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './Footer.css';

//footerComponent

function Footer() {
        return (
            <>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12} >
                    <Box className='footer'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom className='textos'>Contate a desenvolvedora: </Typography>
                        </Box>
                        <Box display="flex" gap={2} alignItems="center" justifyContent="center" className='redeIcon'>                        
                            <a href="mailto:julianalopesmf@gmail.com" target="_blank" className='linkIcon'>
                                <EmailIcon className='redeIcon'/>
                            </a>
                            <a href="https://www.github.com/julianalopesco" target="_blank" className='linkIcon'>
                                <GitHubIcon className='redeIcon'/>
                            </a>
                            <a href="https://www.linkedin.com/in/julianalopesco" target="_blank" className='linkIcon'>
                                <LinkedInIcon className='redeIcon'/>
                            </a>
                        </Box>
                    </Box>
                    <Box className='footer'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos'>© 2023 Copyright: Juliana Lopes e Generation Brasil</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </>
        )
}

export default Footer;
