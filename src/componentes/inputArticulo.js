import React from 'react';
import InputNormal from './InputNormal';

export default class InputArticulo extends React.Component {

    render() {
        if(this.props.valor === '')
        {
            return (
            <div>
                <label htmlFor={this.props.id}>Colocar el articulo {this.props.titulo}</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" defaultValue={this.props.valor} placeholder="Ejemplo HARD3584" id={this.props.id}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.props.noRecuerdaArticulo}>¿NO RECUERDA EL CODIGO?</button>
                    </div>
                </div>
            </div>
            )
        } else {
            return (
                <div>
                    <h3>Informacion del Arcitulo</h3>
                    <InputNormal id={this.props.id} titulo="Nro. Articulo: " valor={this.props.valor[0].id}/>                   
                    <InputNormal id="cat" titulo="Categoria: " valor={this.props.valor[0].categoria}/>
                    <InputNormal id="marca" titulo="Marca: " valor={this.props.valor[0].marca}/>
                    <InputNormal id="mod" titulo="Modelo: " valor={this.props.valor[0].modelo}/>
                    <InputNormal id="stock" titulo="Stock Actual: " valor={this.props.valor[0].stock}/>
                </div>
            )
        }
    }
}
