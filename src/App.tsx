import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"


function App() {

  return (
    <>{/** Precisamos fazer uma div fantasma para agrupar os elementos filhos e não cria uma div na dom */}
   <BrowserRouter> {/* Caminho de rota*/}
   <Navbar/>
  <div className="min-h-[80vh]">
  <Routes>{/**Quando o elemento tem rota */}
    <Route path="/" element= {<Login/>} />
    <Route path="/home" element= {<Home/>} />
    <Route path="/cadastro" element= {<Cadastro/>} />
  </Routes>
  </div>
   <Footer/>
   </BrowserRouter>
   </>

  )
}

export default App
