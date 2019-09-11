import React from 'react';
import './InputBuscarArticulo.css';

export default class InputArticulo extends React.Component {

    render() {

            if(this.props.valor === '')
            {
                return (
                <div>
                    <label for={this.props.id}>Colocar el articulo {this.props.titulo}</label>
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" value={this.props.valor} placeholder="Ejemplo HARD3584" id={this.props.id}/>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" onClick={this.props.noRecuerdaArticulo}>¿NO RECUERDA EL CODIGO?</button>
                    </div>
                    </div>
                </div>
                )
            }
            else 
            {
            return (
                <div>
                    <p>{this.props.valor[0].marca}</p>
                </div>
            )
            

            }

    }
}
