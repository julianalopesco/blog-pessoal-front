import React from 'react';
import './Home.css';

function Home() {
    return (
        // a função retorna apenas um eleemnto, portanto usa-se as divs/containers
        <div> 
            <h1 className="titulo">Home</h1>
            <img className="imgHome" src="src/assets/estante.jpg" alt="estante"/>
        </div>
    )
}

export default Home;