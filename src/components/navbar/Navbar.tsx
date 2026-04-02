import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div className="w-full flex justify-center bg-indigo-900 text-white py-4">
        <div className=" container flex justify-between text-lg mx-8">
           <Link to="/home" className="text-2xl font-bold ">
            Blog Pessoal
            </Link>
        <div className=" flex gap-4 mx-8">
           Postagens
           Temas
           Cadastrar Tema 
           Perfil 
           Sair
        </div>
      </div>
    </div>
  )
}

export default Navbar