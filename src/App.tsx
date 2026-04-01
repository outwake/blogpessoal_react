import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"


function App() {

  return (
    <>{/** Precisamos fazer uma div fantasma para agrupar os elementos filhos e não cria uma div na dom */}
   <Navbar/>
   <Home/>
   <Footer/>
   </>

  )
}

export default App
