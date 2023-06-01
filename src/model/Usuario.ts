//model para o componente de cadastro
interface Usuario{
    id: number;
    nome: string;
    foto: string;
    usuario: string;
    senha: string;
    postagem?: Postagem[] 
}

export default Usuario;