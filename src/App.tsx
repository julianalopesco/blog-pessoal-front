import { React } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Grid} from '@material-ui/core'; 
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';
import ListaTemas from './components/temas/listaTemas/ListaTemas';


// o grid aplica responsividade, através de colunas. xs > extra small, md > medium
function App() {
    return (
        // fragment, substitui o <div> 
        <> 
            <BrowserRouter>
            <Navbar />
            <div style={{ minHeight: '100vh' }}>
                <Routes>
                    <Route path='/' element={<Login/>} />
                    {/* na rota /login, carregue o elemento login */}
                    <Route path='/login' element={<Login />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/cadastrousuario' element={<CadastroUsuario />} />
                    <Route path='/posts' element={<ListaPostagens />} />
                    <Route path='/temas' element={<ListaTemas/>} />
                </Routes>
            </div>
            <Footer />
            </BrowserRouter>
            
        </>
    )
}

export default App