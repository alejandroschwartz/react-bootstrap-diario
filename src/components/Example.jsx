import React, { Component } from 'react';
import '../assets/styles/Politics.scss';
// import './Politics.js';

class Politics extends Component { 

    constructor(props) {
        super(props);
    }

    render(){



        let boton1 = document.getElementById('primer');
        boton1.addEventListener('click', mostrar1)
        let boton2 = document.getElementById('segundo');
        boton2.addEventListener('click', mostrar2);

        let one = document.getElementById('uno');
        let two = document.getElementById('dos');
        let three = document.getElementById('tres');
        let four = document.getElementById('cuatro');
        let five = document.getElementById('cinco');
        let six = document.getElementById('seis');

        let seleccion = document.getElementById('selection');

        let resultado = document.getElementById("resultado");
        let resultado2 = document.getElementById("resultado2");
        let resultado3 = document.getElementById("resultado3");
        let resultado4 = document.getElementById("resultado4");
        let resultado5 = document.getElementById("resultado5");
        let resultado6 = document.getElementById("resultado6");


        function mostrar1() {

            resultado.innerHTML = '';
            resultado2.innerHTML = '';
            resultado3.innerHTML = '';
            resultado4.innerHTML = '';
            resultado5.innerHTML = '';
            resultado6.innerHTML = '';


            function condicion1() {

                if( one.checked == true ) {


                    if( seleccion.value == 1 ) {
                        resultado.innerHTML = one.name + '<br/> introduccion 1';
                    }
                    else if( seleccion.value == 2 ) {
                        resultado.innerHTML = one.name + '<br/> seguridad 1';
                    }
                    else if( seleccion.value == 3 ) {
                        resultado.innerHTML = one.name + '<br/> economia 1';
                    }
                    else {
                        resultado.innerHTML = one.name + '<br/> todos los temas 1';
                    }
                }

                if( two.checked == true ) {


                    if( seleccion.value == 1 ) {
                        resultado2.innerHTML = two.name + '<br/> introduccion 1';
                    }
                    else if( seleccion.value == 2 ) {
                        resultado2.innerHTML = two.name + '<br/> seguridad 1';
                    }
                    else if( seleccion.value == 3 ) {
                        resultado2.innerHTML = two.name + '<br/> economia 1';
                    }
                    else {
                        resultado2.innerHTML = two.name + '<br/> todos los temas 1';
                    }
                }

                if( three.checked == true ) {


                    if( seleccion.value == 1 ) {
                        resultado3.innerHTML = three.name + '<br/> introduccion 1';
                    }
                    else if( seleccion.value == 2 ) {
                        resultado3.innerHTML = three.name + '<br/> seguridad 1';
                    }
                    else if( seleccion.value == 3 ) {
                        resultado3.innerHTML = three.name + '<br/> economia 1';
                    }
                    else {
                        resultado3.innerHTML = three.name + '<br/> todos los temas 1';
                    }
                }

                if( four.checked == true ) {


                    if( seleccion.value == 1 ) {
                        resultado4.innerHTML = four.name + '<br/> introduccion 1';
                    }
                    else if( seleccion.value == 2 ) {
                        resultado4.innerHTML = four.name + '<br/> seguridad 1';
                    }
                    else if( seleccion.value == 3 ) {
                        resultado4.innerHTML = four.name + '<br/> economia 1';
                    }
                    else {
                        resultado4.innerHTML = four.name + '<br/> todos los temas 1';
                    }
                }

                if( five.checked == true ) {


                    if( seleccion.value == 1 ) {
                        resultado5.innerHTML = five.name + '<br/> introduccion 1';
                    }
                    else if( seleccion.value == 2 ) {
                        resultado5.innerHTML = five.name + '<br/> seguridad 1';
                    }
                    else if( seleccion.value == 3 ) {
                        resultado5.innerHTML = five.name + '<br/> economia 1';
                    }
                    else {
                        resultado5.innerHTML = five.name + '<br/> todos los temas 1';
                    }
                }

                if( six.checked == true ) {


                    if( seleccion.value == 1 ) {
                        resultado6.innerHTML = six.name + '<br/> introduccion 1';
                    }
                    else if( seleccion.value == 2 ) {
                        resultado6.innerHTML = six.name + '<br/> seguridad 1';
                    }
                    else if( seleccion.value == 3 ) {
                        resultado6.innerHTML = six.name + '<br/> economia 1';
                    }
                    else {
                        resultado6.innerHTML = six.name + '<br/> todos los temas 1';
                    }
                }
            }

            condicion1();
        }

        function mostrar2() {

            resultado.innerHTML = '';
            resultado2.innerHTML = '';
            resultado3.innerHTML = '';
            resultado4.innerHTML = '';
            resultado5.innerHTML = '';
            resultado6.innerHTML = '';

            function condicion2() {

                if( one.checked == true ) {


                    if( seleccion.value == 1 ) {
                        resultado.innerHTML = one.name + '<br/> introduccion 2';
                    }
                    else if( seleccion.value == 2 ) {
                        resultado.innerHTML = one.name + '<br/> seguridad 2';
                    }
                    else if( seleccion.value == 3 ) {
                        resultado.innerHTML = one.name + '<br/> economia 2';
                    }
                    else {
                        resultado.innerHTML = one.name + '<br/> todos los temas 2';
                    }
                }

                if( two.checked == true ) {


                    if( seleccion.value == 1 ) {
                        resultado2.innerHTML = two.name + '<br/> introduccion 2';
                    }
                    else if( seleccion.value == 2 ) {
                        resultado2.innerHTML = two.name + '<br/> seguridad 2';
                    }
                    else if( seleccion.value == 3 ) {
                        resultado2.innerHTML = two.name + '<br/> economia 2';
                    }
                    else {
                        resultado2.innerHTML = two.name + '<br/> todos los temas 2';
                    }
                }

                if( three.checked == true ) {


                    if( seleccion.value == 1 ) {
                        resultado3.innerHTML = three.name + '<br/> introduccion 2';
                    }
                    else if( seleccion.value == 2 ) {
                        resultado3.innerHTML = three.name + '<br/> seguridad 2';
                    }
                    else if( seleccion.value == 3 ) {
                        resultado3.innerHTML = three.name + '<br/> economia 2';
                    }
                    else {
                        resultado3.innerHTML = three.name + '<br/> todos los temas 2';
                    }
                }

                if( four.checked == true ) {


                    if( seleccion.value == 1 ) {
                        resultado4.innerHTML = four.name + '<br/> introduccion 2';
                    }
                    else if( seleccion.value == 2 ) {
                        resultado4.innerHTML = four.name + '<br/> seguridad 2';
                    }
                    else if( seleccion.value == 3 ) {
                        resultado4.innerHTML = four.name + '<br/> economia 2';
                    }
                    else {
                        resultado4.innerHTML = four.name + '<br/> todos los temas 2';
                    }
                }

                if( five.checked == true ) {


                    if( seleccion.value == 1 ) {
                        resultado5.innerHTML = five.name + '<br/> introduccion 2';
                    }
                    else if( seleccion.value == 2 ) {
                        resultado5.innerHTML = five.name + '<br/> seguridad 2';
                    }
                    else if( seleccion.value == 3 ) {
                        resultado5.innerHTML = five.name + '<br/> economia 2';
                    }
                    else {
                        resultado5.innerHTML = five.name + '<br/> todos los temas 2';
                    }
                }

                if( six.checked == true ) {


                    if( seleccion.value == 1 ) {
                        resultado6.innerHTML = six.name + '<br/> introduccion 2';
                    }
                    else if( seleccion.value == 2 ) {
                        resultado6.innerHTML = six.name + '<br/> seguridad 2';
                    }
                    else if( seleccion.value == 3 ) {
                        resultado6.innerHTML = six.name + '<br/> economia 2';
                    }
                    else {
                        resultado6.innerHTML = six.name + '<br/> todos los temas 2';
                    }
                }
            }

            condicion2();
        }




        return (

            <div className="container">




                <div class="container" >
                    <div className='row mt-4 mb-4' >
                        <input type="checkbox" name="Macri" value='1' id="uno" />
                        <input type="checkbox" name="Expert" value='2' id="dos" />
                        <input type="checkbox" name="Centurión" value='3' id="tres" />
                        <input type="checkbox" name="Lavagna" value='4' id="cuatro" />
                        <input type="checkbox" name="Fernandez" value='5' id="cinco" />
                        <input type="checkbox" name="Del Caño" value='6' id="seis" />
                    </div>
                    <div className='row mt-4 mb-4'>
                        <select id="selection" >
                            <option value="0" >--  Los temas  --</option>
                            <option value="1" > Introducción </option>
                            <option value="2" > Seguridad </option>
                            <option value="3" > Economia </option>
                        </select>
                    </div>
                    <div className='row mt-4 mb-4'>
                        <input type='button' value="enviar1" id="primer" />
                        <input type='button' value="enviar2" id="segundo" />
                    </div>
                </div>
                <div class="container mt-4 mb-4">
                    <h1 id='resultado' ></h1>
                    <h1 id='resultado2' ></h1>
                    <h1 id='resultado3' ></h1>
                    <h1 id='resultado4' ></h1>
                    <h1 id='resultado5' ></h1>
                    <h1 id='resultado6' ></h1>
                </div>



            </div>
        )
    }
}

export default Politics;