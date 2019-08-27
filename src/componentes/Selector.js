import React from 'react';
import './Selector.css';

class Selector extends React.Component {
  
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/pepe">STOCK</a>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link resaltado" id="ingresar" href="/pepe" onClick={this.props.handleState}>Ingresar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="entregar" href="/pepe" onClick={this.props.handleState}>Entregar</a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link" id="consultar" href="/pepe" onClick={this.props.handleState}>Consultar</a>
                        </li>
                        </ul>
                        <span className="navbar-text">
                        FC
                        </span>
                    </div>
                </nav>
                </div>
        );
    }
}

export default Selector;
