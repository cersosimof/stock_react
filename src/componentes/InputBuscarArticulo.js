import React from 'react';
import './InputBuscarArticulo.css';
import GrupoSelect from './GropoSelect';

class Buscador extends React.Component {

    state = ({
            recuerdaArticulo : true
        })

    noRecuerdaArticulo = e => {
        this.setState({
            recuerdaArticulo : !this.state.recuerdaArticulo
        })
    }

    traerArticulo(art){
        //document.getElementById(this.props.id).value = art
        console.log('se ejecuta traer articulo')
        console.log(art)
    }

    render() {
        if(this.state.recuerdaArticulo)
        {
            return (
                <div>
                    <label for={this.props.id}>Colocar el articulo {this.props.titulo}</label>
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Ejemplo HARD3584" id={this.props.id}/>
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
                        <GrupoSelect 
                        recuerdaArticulo={this.noRecuerdaArticulo}
                        traerArticulo={this.traerArticulo}
                        />
                    </div>
                    <hr/>
                </div>
            )
        }
    }
}

export default Buscador;
