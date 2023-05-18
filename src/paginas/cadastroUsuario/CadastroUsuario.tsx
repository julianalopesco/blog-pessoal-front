import React, {useState, useEffect, ChangeEvent} from 'react';
import {Grid, Typography, TextField, Button} from '@material-ui/core'; 
import {Box} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import './CadastroUsuario.css';
import Usuario from '../../model/Usuario';
import { cadastroUsuario } from '../../services/Service';

function CadastroUsuario(){
    let history = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<Usuario>( //contém as informações que serão enviadas para cadastro
        {
            id: 0,
            nome: '',
            usuario: '',
            foto:'',
            senha: ''            
        })

    const [userResult, setUserResult] = useState<Usuario>( //armazena os valores do retorno da api
        {
            id: 0,
            nome: '',
            usuario: '',
            foto:'',
            senha: ''
        })

    useEffect(() => { //direciona a tela de cadastro para a tela de login se ele for cadastrado 
        if (userResult.id != 0) {
            history("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){ //captura o valor digitado na senha
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) { //compara as duas senhas
        e.preventDefault()
        if(confirmarSenha == user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }
    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagemCadastro'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textosCadastro'> Cadastrar </Typography>
                            <TextField value={user.nome} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                            <TextField value={user.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)} id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth type='password' />
                            <TextField value={user.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' fullWidth type='password' />
                            <TextField value={confirmarSenha} onChange={(e:ChangeEvent<HTMLInputElement>)=>confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' fullWidth type='password' />
                            {/* o link precisa ser o do react-router-dom */}
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>                                                                                
                                    <Button variant='contained' color='secondary' className='btnCancelar'>Cancelar</Button>
                                </Link> 
                                    <Button type='submit' variant='contained' color='primary' >Cadastrar</Button>
                            </Box>    
                    </form>
                </Box>
            </Grid>

        </Grid>
    );
}

export default CadastroUsuario;