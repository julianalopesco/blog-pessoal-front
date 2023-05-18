import React, {ChangeEvent, useState, useEffect} from 'react';
import '.Login.css'
import {Grid, Box, Typography, TextField, Button} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UsuarioLogin from '../../model/UsuarioLogin';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';

//com o grid container, os elementos já ficam um abaixo do outro por padrão 
//do xs pra cima, o grid aparece como o definido 
function Login() {

    let history = useNavigate(); //função do react que navega uma pessoa de uma página pra outra. cria variável para navegação
    const [token,setToken] = useLocalStorage('token');
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>( //armazena o estado no navegador
        //usuarioLoging: para acessar a informação do state
        //setUsuarioLogin: função para alterar a info que está no state
        // \/estado inicial do UsuarioLogin/state
        {
            id: 0,
            nome: '',
            usuario: '',
            foto:'',
            senha: '', 
            token: ''
        }
        )

        //atualizar a model com o valor que o usuário digitar no input 
        function updatedModel(e: ChangeEvent<HTMLInputElement>) { //e:evento 
                setUsuarioLogin({
                    ...usuarioLogin,
                    [e.target.name]: e.target.value 
                })
        } 

        //responsável por fazer o ciclo de vida do componente 
        useEffect(()=>{
            if(token != '') //verifica se o token é diferente de vazio, ou seja, foi preenchido
            history('/home')
        }, [token])//passa o token como parâmetro do effect

        //fazer o envio das formações 
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
                e.preventDefault(); //impede que o botão atualize a tela 
                try {//tentativa de execução
                    await login(`/usuarios/logar`,usuarioLogin, setToken)

                    alert("Usuário logado com sucesso!");
                } catch{//onde o erro será relatado e tratado
                    alert('Dados do usuário inconsistentes. Erro ao logar');
                }
        }

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item alignItems='center' xs={6}>
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos'> Entrar </Typography>
                            <TextField value={usuarioLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)} id='usuario' label='Nome de usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField value={usuarioLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' fullWidth type='password' />
                            {/* o link precisa ser o do react-router-dom */}
                            <Box marginTop={2} textAlign='center'>                                                                             
                                <Button type='submit' variant='contained' color='primary' >Logar</Button>
                            </Box>    
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'> Não tem uma conta? </Typography>
                            </Box>
                            <Link to='/cadastrousuario'>
                                <Typography variant='subtitle1' gutterBottom align='center' className='textos' >Cadastre-se</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className='imagemLogin'></Grid>
            </Grid>
        </>
    )
}

export default Login