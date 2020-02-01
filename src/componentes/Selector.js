/*

BARRA DE CAMBIO DE ESTADO

*/

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import FormularioAlta from '../vistas/cuerpoFormularioAlta';
  import Ingresar from '../vistas/cuerpoIngresar'
  import Entregar from '../vistas/cuerpoEntregar'

class Selector extends React.Component {

    render() {
        return (
            <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="/">
                        <i class="fas fa-layer-group"></i>
                    </a>
                    <Link className="navbar-brand" href="/">STOCK</Link>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" id="ingresar" to="/ingresar" >Ingresar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="entregar" to="/entregar" >Entregar</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to="/alta">Alta Articulo</Link>
                        </li>
                        </ul>
                        <span className="navbar-text">
                        FC
                        </span>
                    </div>
                </nav>
                </div>

                <Switch>
                    <Route exact path="/alta">
                        <FormularioAlta />
                    </Route>
                    <Route exact path="/ingresar">
                        <Ingresar />
                    </Route>
                    <Route exact path="/entregar">
                        <Entregar />
                    </Route>
                </Switch>

            </Router>
        );
    }
}

export default Selector;
