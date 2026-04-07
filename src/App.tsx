import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import { AuthProvider } from "./contexts/AuthContext"
import ListaTemas from "./components/tema/listatemas/ListarTemas"
import FormTema from "./components/tema/formtema/FormTema"
import DeletarTema from "./components/tema/deletartema/DeletarTema"



function App() {

  return (
    <>{/** Precisamos fazer uma div fantasma para agrupar os elementos filhos e não cria uma div na dom */}
    <AuthProvider>
   <BrowserRouter> {/* Caminho de rota*/}
   <Navbar/>
  <div className="min-h-[80vh]">
  <Routes>{/**Quando o elemento tem rota */}
    <Route path="/" element= {<Login/>} />
    <Route path="/cadastro" element= {<Cadastro/>} />
    <Route path="/home" element= {<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/temas" element={<ListaTemas />} />
    <Route path="/cadastrartema" element={<FormTema />} />
    <Route path="/editartema/:id" element={<FormTema />} />
    <Route path="/deletartema/:id" element={<DeletarTema />} />
  </Routes>
  </div>
   <Footer/>
   </BrowserRouter>
  </AuthProvider>
   </>

  )
}

export default App
