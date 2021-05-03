import React from 'react';
import "./styles/styles.scss";
import Curso from "./Curso";

const App = () => (
    <>
        <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" alt="banner" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8hCLLC5SOaOY_STGfCH3cIgoeZD_9m4lGA"/>
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">Cursos de EDteam</p>
                    <p>Tu futuro te está esperando</p>
                    <a href="https://ed.team/" className="button">Suscribirse</a>
                </div>
            </div>
        </div>
    </div>
    <div className="ed-grid m-grid-3">
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
    </div>
    </>
);

export default App;

/* Reglas JSX
    1. Toda etiqueta debe cerrarse.
    2. Los componentes deben devolver UN solo componente padre.
    3. Apoyarse de los Fragment cuando necesito devolver 2 elementos o más.
    4. <Fragment>(hijos)</Fragment> ó <>(hijos)</>
    5. img siempre se cierra: <img src="blablabla.jpg"/>
    6. El atributo class pasa a ser className
    7. El atributo for pasa a ser htmlFor
 */