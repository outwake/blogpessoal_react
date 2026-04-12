import axios from "axios";

//Aqui é para colocar a URL do deploy para ter a conexão
//Criando uma instancia do Axios, que é uma biblioteca para criar requisições http
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

//Funçao para cadastro Usuario

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}
 //Função para atualizar o usuario
 export const atualizarUsuario = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header);
    setDados(resposta.data);
}

//Funçao para Autenticar Usuario

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

//Função para Consultar com token
export const buscar = async(url: string, setDados: Function, header: Object)=>{
  const resposta = await api.get(url, header);
  setDados(resposta.data);
}

//Função para cadastrar com token
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) =>{
       const resposta = await api.post(url, dados, header);
       setDados(resposta.data);
}

// Função para Atualizar com token
export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header);
  setDados(resposta.data);
}

// Função para deletar com Token
export const  deletar = async (url: string, header: Object) =>{
    await api.delete(url, header);
}
