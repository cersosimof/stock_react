import React from 'react';
import Select from './Select';

export default class GrupoSelect extends React.Component {

    constructor(){
        super();
            this.state = ({ //BASES 
            categoria : [],
            marca : [],
            modelo : [],
            articuloCompleto : []
        })
        this.buscador('categoria');
    }
    
    base = { //PALABRAS CLAVES
        categoria : '',
        marca : '',
        modelo : ''
    }

    buscador(clave){
    fetch("http://192.168.64.2/stock_react/back/index.php?cat="+this.base.categoria+"&marca="+this.base.marca+"&modelo="+this.base.modelo)
        .then((response)=>response.json())
        .then((responseJson)=>
            {
                this.setState({ 
                    [clave] : responseJson
                })
            })
        .catch((error) => {
            console.log('Error: ', error)
        })
    }


    handleChange = (e) => {
        this.base[e.target.name] = e.target.value;
        if(e.target.name === 'categoria')
        {
            this.base.marca = '';
            this.base.modelo = '';
            this.buscador('marca');
        }
        else if(e.target.name === 'marca')
        {
            this.base.modelo = '';
            this.buscador('modelo');
        }
        else if(e.target.name === 'modelo')
        {
            this.buscador('articuloCompleto');
            console.log(this.state.articuloCompleto)
        }
    }

    buscarYModificar = e => {
            this.props.traerArticulo(this.state.articuloCompleto)   
    }

    render() {
        return (
            <div>
                <Select 
                contenido="categoria" 
                infos={this.state.categoria} 
                handleChange={this.handleChange}
                />
                <Select 
                contenido="marca" 
                infos={this.state.marca} 
                handleChange={this.handleChange}
                />
                <Select 
                contenido="modelo" 
                infos={this.state.modelo} 
                handleChange={this.handleChange}
                />


                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active">
                    <input type="radio" name="options" onClick={this.buscarYModificar} id="option1" autoComplete="off"/> OK
                </label>

                <label className="btn btn-secondary">
                    <input type="radio" onClick={this.props.recuerdaArticulo} name="options" id="option3" autoComplete="off"/> Cerrar
                </label>
                </div>

            </div>
        )
    }
}
