import React from 'react';
import './InputBuscarArticulo.css';
import Select from './Select';

class Buscador extends React.Component {

    state = ({
            recuerdaArticulo : true
        })

    noRecuerdaArticulo = e => {
        this.setState({
            recuerdaArticulo : !this.state.recuerdaArticulo
        })
    }
    
    render() {
        if(this.state.recuerdaArticulo)
        {
            return (
                <div>
                    <label for={this.props.id}>Colocar el articulo {this.props.titulo}</label>
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder=" Ejemplo  HARD3584" id={this.props.id}/>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" onClick={this.noRecuerdaArticulo}>¿NO RECUERDA EL CODIGO?</button>
                    </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div align="center">
                        <h4>Buscador de Articulo</h4>
                        <Select contenido="categoria" url="http://localhost/stock_react/back/"/>
                        <Select contenido="marca" url="http://localhost/stock_react/back/segundoSelect.php?cat=discos"/>
                        <button type="button" class="btn btn-success">Ok</button>
                        <button type="button" onClick={this.noRecuerdaArticulo} class="btn btn-secondary">Cerrar</button>  
                    </div>
                    <hr/>
                </div>
            )
        }
    }
}

export default Buscador;
