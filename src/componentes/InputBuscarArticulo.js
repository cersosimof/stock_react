import React from 'react';
import './InputBuscarArticulo.css';

class Buscador extends React.Component {

    state = {
        recuerdaArticulo : true
    }    

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
                        <div className="form-group col-md-10">
                            <select id="id_cat" className="form-control">
                            <option selected>Buscar Categoria...</option>
                            <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-10">
                            <select id="id_marca" className="form-control">
                            <option selected>Seleccione Marca</option>
                            <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-10">
                            <select id="id_modelo" className="form-control">
                            <option selected>Buscar Modelo...</option>
                            <option>...</option>
                            </select>
                        </div> 
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
