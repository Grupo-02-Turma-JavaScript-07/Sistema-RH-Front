import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaColaborador from './components/colaboradores/listacolaborador/ListaColaborador'
import Footer from './components/footer/Footer'
// import Sidebar from './components/sidebar/Sidebar'
import Perfil from './pages/perfil/Perfil'
import Sobre from './pages/sobre/Sobre'
import Home from './pages/home/Home';
// import Search from './components/search/Search';

function App() {

  return (
    <>
    <BrowserRouter>
      <div className="flex min-h-screen">
        {/* ## to do: Search e Sidebar deve ser insideridos diretamente no componente utilizado */}
        {/* Sidebar fixa à esquerda */}
        {/* <Sidebar /> */}
        {/* Conteúdo principal das rotas */}
        <div className="flex-1 bg-gray-50">
          {/* <Search/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/colaboradores" element={<ListaColaborador />}/>
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/perfil" element={<Perfil idColaborador={1}/>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
