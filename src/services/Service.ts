//responsável pela regra de negócio, a comunicação do front com o back-end 

import axios from 'axios';

export const api = axios.create({
    baseURL: 'endereçorender'
})

    export const cadastroUsuario = async(url: any, dados: any, setDado: any) => { //setdado: objeto json contendo os dados do usuário e token
        const resposta = await api.post(url, dados)
        setDado(resposta.data)
    }

    export const login = async(url: any, dados: any, setDado: any) => { //setdado: objeto json contendo os dados do usuário e token
        const resposta = await api.post(url, dados)
        setDado(resposta.data.token) 
    }
