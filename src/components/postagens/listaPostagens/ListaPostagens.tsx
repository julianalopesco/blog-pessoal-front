import './ListaPostagens.css'
import {Grid, Typography} from '@material-ui/core';

function ListaPostagens() {
        return (
            <>
                <Grid container>
                    <Box>
                        <Grid iten xs={4}>
                            <Typography>Postagem:</Typography>
                            <Typography>Titulo da postagem:</Typography>
                            <Typography>Texto da postagem:</Typography>
                            <Typography>Data da postagem:</Typography>
                            <Box>
                                <Button>Editar</Button>
                                <Button>Apagar</Button>
                            </Box>
                        </Grid>
                    </Box>

                </Grid>
            </>
        )
}

export default ListaPostagens;