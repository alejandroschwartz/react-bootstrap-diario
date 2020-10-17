import React from 'react';
import '../assets/styles/Main.scss';

const Header = () => (

    <div className="main">
        <div className="container">
            <div className="row mt-4">
                <div className="btn-group btn-group-sm mr-auto" role="group" aria-label="...">
                    <a href="#" className="badge badge-light">Política</a>
                    <a href="#" className="badge badge-light">Debate presidencial</a>
                </div>          
            </div>
        </div>
        <div className="container">
            <div className="row mt-4">
                <h1>El interactivo del debate presidencial: compará los candidatos, tema por tema</h1>
                <p>Seleccioná cada una de las instancias del primer debate realizado en Santa Fe y filtralo por candidato para ver una síntesis de sus ideas centrales.</p>
                <small>Lunes 14 de octubre de 2019 - 07:30 | Actualizado: 20/10/2019 - 21:46</small>
            </div>
        </div>
    </div>


);

export default Header;