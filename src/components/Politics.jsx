import React from 'react';
import '../assets/styles/Politics.scss';
// import './Politics.js';

const Politics = () => (

    <div className="container">
        <div className="row mt-2">
            <span className="badge badge-primary"><i className="fas fa-info-circle"></i> Seleccioná candidato y tema de debate</span>
        </div>
        <div className="row mt-4">
            <div className="col">
                <label className='label' htmlFor="one">
                    <input type="checkbox" name="Macri" id="one" />
                    <div className="politic one">
                        <img src="https://i.imgur.com/Toyk28W.png" height='80px' alt=""/>
                    </div>
                    <span><br/>Mauricio<br/>Macri</span>
                </label>
            </div>
            <div className="col">
                <label className='label' htmlFor="two">
                    <input type="checkbox" name="Expert" id="two"/>
                    <div className="politic two">
                        <img src="https://i.imgur.com/C07grp6.png" height='80px' alt=""/>
                    </div>
                    <span><br/>J. Luis<br/>Expert</span>
                </label>
            </div>
            <div className="col">
                <label className='label' htmlFor="three">
                    <input type="checkbox" name="Centurion" id="three"/>
                    <div className="politic three">
                        <img src="https://i.imgur.com/d5m9RYh.png" height='80px' alt=""/>
                    </div>
                    <span><br/>J. J. Gomez<br/>Centurion</span>
                </label>
            </div>
            <div className="col">
                <label className='label' htmlFor="four">
                    <input type="checkbox" name="Lavagna" id="four"/>
                    <div className="politic four">
                       <img src="https://i.imgur.com/1iueqP0.png" height='80px' alt=""/>
                    </div>
                    <span><br/>Roberto<br/>Lavagna</span>
                </label>
            </div>
            <div className="col">
                <label className='label' htmlFor="five">
                    <input type="checkbox" name="Fernandez" id="five"/>
                    <div className="politic five">
                        <img src="https://i.imgur.com/D2wWl3r.png" height='80px' alt=""/>
                    </div>
                    <span><br/>Alberto<br/>Fernandez</span>
                </label>
            </div>
            <div className="col">
                <label className='label' htmlFor="six">
                    <input type="checkbox" name="Del Caño" id="six"/>
                    <div className="politic six">
                        <img src="https://i.imgur.com/UWgPBI5.png" height='80px' alt=""/>
                    </div>
                    <span><br/>Nicolas<br/>Del Caño</span>
                </label>
            </div>
        </div>

        <div className="row mt-4 mb-4">
                <div className="col col-md-3">
                    <button type="button" className="btn btn-outline-dark btn-block" id='first' value='1' >Primer debate</button>
                </div>
                <div className="col col-md-3">
                    <button type="button" className="btn btn-primary btn-block" id='second' >Segundo debate</button>
                </div>
        </div>

        <div className="row">
            <div className="col col-md-6 mb-4">
                <button className="btn btn-outline-secondary dropdown-toggle btn-sm btn-block" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Elegír Tema</button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Introducción</a>
                    <a className="dropdown-item" href="#">Seguridad</a>
                    <a className="dropdown-item" href="#">Empleo</a>
                    <a className="dropdown-item" href="#">Cierre</a>
                </div>
            </div>
        </div>

        <div className="row">
        <h1 id='resultado' ></h1>
            <h1 id='resultado2' ></h1>
            <h1 id='resultado3' ></h1>
            <h1 id='resultado4' ></h1>
            <h1 id='resultado5' ></h1>
            <h1 id='resultado6' ></h1>
        </div>

    </div>

);

export default Politics;