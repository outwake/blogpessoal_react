import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizarUsuario } from "../../../services/Service";
import { ToastAlerta } from "../../../util/ToastAlerta";

interface UsuarioPerfil {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
}

function EditarPerfil() {
  const navigate = useNavigate();

 
  const { usuario, handleLogout, setUsuario } = useContext(AuthContext);

 
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editarPerfil, setEditarPerfil] = useState<boolean>(false);
  const [dadosPerfil, setDadosPerfil] = useState<UsuarioPerfil>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const token = usuario.token;

  useEffect(() => {
  if (token === "") {
    navigate("/");
    return;
  }

  setDadosPerfil({
    id: usuario.id,
    nome: usuario.nome,
    usuario: usuario.usuario,
    senha: '',       
    foto: usuario.foto.trim(),  
  });
}, [token]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setDadosPerfil({
      ...dadosPerfil,
      [e.target.name]: e.target.value,
    });
  }

  async function handleAtualizarPerfil() {
  console.log("Token:", token)       
  console.log("Dados:", dadosPerfil)
  setIsLoading(true);
  try {
    await atualizarUsuario(
      `/usuarios/atualizar`,
      dadosPerfil,
      (dadosAtualizados: UsuarioPerfil) => {
        setDadosPerfil(dadosAtualizados);                    
        setUsuario({ ...dadosAtualizados, token: token });   
      },
      { headers: { Authorization: token } }
    );
    setEditarPerfil(false);
    ToastAlerta("Perfil atualizado com sucesso!", "sucesso");
  } catch (error) {
    ToastAlerta("Erro ao atualizar perfil:", "erro");
  } finally {
    setIsLoading(false);
  }
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">

        {/* Foto e nome */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <img
            src={dadosPerfil.foto}
            alt="Foto de perfil"
            className="w-28 h-28 rounded-full object-cover border-4 border-indigo-400"
          />
          {!editarPerfil && (
            <>
              <h2 className="text-2xl font-bold text-gray-800">{dadosPerfil.nome}</h2>
              <p className="text-gray-500">{dadosPerfil.usuario}</p>
            </>
          )}
        </div>

        {/* Formulário de edição */}
        {editarPerfil ? (
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-600 font-medium">Nome</label>
              <input
                type="text"
                name="nome"
                value={dadosPerfil.nome}
                onChange={atualizarEstado}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 font-medium">Usuário</label>
              <input
                type="text"
                name="usuario"
                value={dadosPerfil.usuario}
                onChange={atualizarEstado}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 font-medium">URL da Foto</label>
              <input
                type="text"
                name="foto"
                value={dadosPerfil.foto}
                onChange={atualizarEstado}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-medium">Senha</label>
              <input
                type="text"
                name="senha"
                value={dadosPerfil.senha}
                onChange={atualizarEstado}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div className="flex gap-3 mt-2">
              <button
                onClick={handleAtualizarPerfil}
                disabled={isLoading}
                className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition"
              >
                {isLoading ? "Salvando..." : "Salvar"}
              </button>
              <button
                onClick={() => setEditarPerfil(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setEditarPerfil(true)}
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Editar Perfil
            </button>
            <button
              onClick={handleLogout}
              className="w-full bg-red-100 hover:bg-red-200 text-red-600 font-semibold py-2 rounded-lg transition"
            >
              Sair
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditarPerfil;