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
    fetch("http://localhost/stock_react/back/index.php?cat="+this.base.categoria+"&marca="+this.base.marca+"&modelo="+this.base.modelo)
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
            <button type="button" className="btn btn-success" onClick={this.buscarYModificar}>Ok</button>
            <button type="button" onClick={this.props.recuerdaArticulo} className="btn btn-secondary">Cerrar</button>  
            </div>
        )
    }
}
