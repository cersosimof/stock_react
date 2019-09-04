import React from 'react';
import './InputBuscarArticulo.css';
import Select from './Select';

class GrupoSelect extends React.Component {

    constructor(){
        super();
            this.state = ({
            categoria : '',
            db_categoria : [],
            marca : '',
            db_marca : [],
            modelo : '',
            db_modelo : [],
            estado : ''
        })
         this.buscador('categoria');
    }
    
    buscador(prop){
        fetch("http://localhost/stock_react/back/index.php?cat="+this.state.categoria+"&marca="+this.state.marca)
        .then((response)=>response.json())
        .then((responseJson)=>
            {
                this.guardarOpc(prop, responseJson)
            })
        }

    handleChange = e => {
        // e.preventDefault()
        // console.log("e.target.name "+e.target.name)
        // console.log("e.target.value "+e.target.value)
        // console.log("categoria "+this.state.categoria)
        // console.log("marca "+this.state.marca)
        // console.log("modelo "+this.state.modelo)
        this.setState({ 
            [e.target.name] : e.target.value
        })
        if(e.target.name === 'categoria')
        {
            this.buscador('marca')
        }
        else if(e.target.name === 'marca')
        {
            this.buscador('modelo') 
        }

    }

    guardarOpc(uno, dos) {
        uno = "db_"+uno;
        this.setState({ 
            [uno] : dos
        })
    }

    render() {
        return (
            <div>

                <Select contenido="categoria" infos={this.state.db_categoria} handleChange={this.handleChange}/>
                
                <Select contenido="marca" infos={this.state.db_marca} handleChange={this.handleChange}/>

                <Select contenido="modelo" infos={this.state.db_modelo} handleChange={this.handleChange}/>

            </div>
        )
    }
}

export default GrupoSelect;
