import React from 'react';
import './InputBuscarArticulo.css';
import Select from './Select';

class GrupoSelect extends React.Component {

    state = ({
        categoria : '',
        tercer_select : ''
    })

    handleState = e => {
        // console.log(this.state[e.target.id])
        // console.log(e.target.value)
        this.setState({
            categoria : e.target.value
        })
        console.log(this.state[e.target.id])
        console.log(e.target.value)
        

    }

    render() {
        return (
            <div id="div_select">
                <Select contenido="categoria" traerInfo={this.handleState} />
                
                <Select contenido="marca"  />

                <Select contenido="modelo" />

            </div>
        )
    }
}

export default GrupoSelect;
