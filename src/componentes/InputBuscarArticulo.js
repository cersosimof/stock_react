import React from 'react';
import './InputBuscarArticulo.css';
import Select from './Select';

class Buscador extends React.Component {

constructor(){
    super();
        this.state = ({
            db : [],
            recuerdaArticulo : true
        });
    }
    
    UNSAFE_componentWillMount(){
    fetch("http://localhost/stock_react/back/")
    .then((response)=>response.json())
    .then((responseJson)=>
        {
            this.setState({ 
            db: responseJson
            })
        })

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
                        <Select info={this.state.db}/>
                        <Select />
                        <Select />
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
