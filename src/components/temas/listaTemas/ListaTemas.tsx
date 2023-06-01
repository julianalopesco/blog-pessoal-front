import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaTemas.css';
import Tema from '../../../model/Tema';
import {useNavigate} from 'react-router-dom'; 
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaTemas() {
  const [temas, setTemas] = useState<Tema[]>([]) //para inicializar os temas dentro de um array

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
    );
  let navigate = useNavigate(); //faz o redirect da página

  async function getTemas() {
    // alterado a função pra dentro de um try catch, para poder verificar a validade do token do usuário
    try {
      // a parte do TRY, fica igual ao que ja tinha antes
      await busca('/temas', setTemas, {
        headers: {
          Authorization: token
        }
      })
    } catch (error: any) {
      // a parte do catch, vai receber qlquer mensagem de erro que chegue, e caso a mensagem tenha um 403 no seu texto
      // significa que o token já expirou. Iremos alertar o usuário sobre isso, apagar o token do navegador, e levá-lo para a tela de login
      if(error.toString().includes('403')) {
        toast.success('🦄 Wow so easy!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        navigate('/login')
      }
    }
  }
  
  useEffect(() => {
    getTemas()
  }, [])

  useEffect(() => {
    if(token === ''){ 
      toast.success('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      navigate('/login')
    }
  }, [])
  
  return (
    <>
    {
      temas.map(tema => (
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
    ))
    }
    </>
  );
}


export default ListaTemas;