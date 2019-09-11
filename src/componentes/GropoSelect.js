import React from 'react';
import './InputBuscarArticulo.css';
import Select from './Select';


export default class GrupoSelect extends React.Component {

    constructor(){
        super();
            this.state = ({ //BASES 
            categoria : [],
            marca : [],
            modelo : []
        })
        this.buscador('categoria');
    }
    
    base = { //PALABRAS CLAVES
        categoria : '',
        marca : '',
        modelo : ''
    }

    buscador(clave){
    //fetch("http://localhost/stock_react/back/index.php?cat="+this.base.categoria+"&marca="+this.base.marca+"&modelo="+this.base.modelo)
    fetch("http://192.168.64.2/stock_react/back/index.php?cat="+this.base.categoria+"&marca="+this.base.marca+"&modelo="+this.base.modelo)
    .then((response)=>response.json())
    .then((responseJson)=>
        {
            this.setState({ 
                [clave] : responseJson
            })
        })
    }


    handleChange = (e) => {
        this.base[e.target.name] = e.target.value;
        console.log(e.target.name)
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
            <button type="button" onClick={this.props.traerArticulo(this.base.modelo)} class="btn btn-success">Ok</button>
            <button type="button" onClick={this.props.recuerdaArticulo} class="btn btn-secondary">Cerrar</button>  
            </div>
        )
    }
}
