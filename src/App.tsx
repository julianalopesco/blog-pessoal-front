import { useState } from 'react'
import {Grid} from '@material-ui/core'; 
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import './App.css'

//<>: fragment, substitui o <div> 
// o grid aplica responsividade, através de colunas. xs > extra small, md > medium
function App() {
    return (
        <> 
            <Navbar />
            <Home />
            <Footer />
        </>
    )
}

export default App