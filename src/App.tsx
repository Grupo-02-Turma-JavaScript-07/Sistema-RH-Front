import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaColaborador from './components/colaboradores/listacolaborador/ListaColaborador'
import Footer from './components/footer/Footer'
import Sidebar from './components/sidebar/Sidebar'
import Perfil from './pages/perfil/Perfil'
import Sobre from './pages/sobre/Sobre'
import Home from './pages/home/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/colaboradores" element={<ListaColaborador />}/>
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
