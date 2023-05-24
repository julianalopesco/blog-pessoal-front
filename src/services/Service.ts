//responsável pela regra de negócio, a comunicação do front com o back-end 

import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://linkblog.onrender.com/'
})

    export const cadastroUsuario = async(url: any, dados: any, setDado: any) => { //setdado: objeto json contendo os dados do usuário e token
        const resposta = await api.post(url, dados)
        setDado(resposta.data)
    }

    export const login = async(url: any, dados: any, setDado: any) => { //setdado: objeto json contendo os dados do usuário e token
        const resposta = await api.post(url, dados)
        setDado(resposta.data.token) 
    }

    export const busca = async(url: any, setDado: any, header: any) => { //header: passa o token para autenticar a requisição 
        const resposta = await api.get(url, header)
        setDado(resposta.data) 
    }

    export const buscaId = async(url: any, setDado: any, header: any) => { //header: passa o token para autenticar a requisição 
        const resposta = await api.get(url, header)
        setDado(resposta.data) 
    }

    export const post = async(url: any, dados: any, setDado: any, header: any) => { //header: passa o token para autenticar a requisição 
        const resposta = await api.post(url, dados, header)
        setDado(resposta.data) 
    }

    export const put = async(url: any, dados: any, setDado: any, header: any) => { //header: passa o token para autenticar a requisição 
        const resposta = await api.put(url, dados, header)
        setDado(resposta.data) 
    }

    export const deleteId = async(url: any, header: any) => { //header: passa o token para autenticar a requisição 
    await api.delete(url, header)
    }


