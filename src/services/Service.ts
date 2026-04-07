import axios from "axios";

//Aqui é para colocar a URL do deploy para ter a conexão
//Criando uma instancia do Axios, que é uma biblioteca para criar requisições http
const api = axios.create({
    baseURL: 'https://blogpessoal-oela.onrender.com'
})

//Funçao para cadastro Usuario

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

//Funçao para Autenticar Usuario

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

