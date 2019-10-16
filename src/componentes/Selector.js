/*

BARRA DE CAMBIO DE ESTADO

*/

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import Formulario_alta from './Formulario_alta';
  import Ingresar from './Ingresar'
  import Entregar from './Entregar'

class Selector extends React.Component {

    render() {
        return (
            <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                        <Formulario_alta />
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
