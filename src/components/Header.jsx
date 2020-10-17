import React from 'react';
import '../assets/styles/Header.scss';

const Header = () => (

    <div className="container">
        <div className="row mt-2 mb-2">
            <div className="btn-group btn-group-sm mr-auto" role="group" aria-label="...">
                <button type="button" className="btn btn-light btn-sm"><i className="fas fa-bars"></i></button>
                <button type="button" className="btn btn-light btn-sm"><i className="fas fa-home"></i> Inicio</button>
                <button type="button" className="btn btn-light btn-sm"><i className="far fa-clock"></i> Lo último</button>
                <button type="button" className="btn btn-light btn-sm"><i className="fas fa-bolt"></i> Popular</button>
            </div>
            <nav className="btn-group btn-group-sm mr-auto">
                <a className="navbar-brand" href="#">LaOzz</a>
            </nav>
            <div className="btn-group btn-group-sm ml-auto" role="group" aria-label="...">
                <button type="button" className="btn btn-light btn-sm"><i className="fas fa-user"></i> Iniciar seción</button>
                <button type="button" className="btn btn-warning btn-sm">Suscribirme</button>
            </div>
        </div>
        <div className="row">
            <div className="btn-group btn-group-sm mr-auto" role="group" aria-label="...">
                <button type="button" className="btn btn-light btn-sm">Deportes</button>
                <button type="button" className="btn btn-light btn-sm">Eventos</button>
                <button type="button" className="btn btn-light btn-sm">Clima</button>
                <button type="button" className="btn btn-light btn-sm">Horóscopo</button>
                <button type="button" className="btn btn-light btn-sm">Sucesos</button>
                <button type="button" className="btn btn-light btn-sm">Clasificados</button>
                <button type="button" className="btn btn-light btn-sm">Negocios</button>
                <button type="button" className="btn btn-light btn-sm">Política</button>
                <button type="button" className="btn btn-light btn-sm">Economía</button>
                <button type="button" className="btn btn-light btn-sm">Moda</button>
                <button type="button" className="btn btn-light btn-sm">Tendencias</button>
            </div>
        </div>
    </div>


);

export default Header;