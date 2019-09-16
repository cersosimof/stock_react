import React from 'react';
import GrupoSelect from './GropoSelect';
import InputArticulo from './inputArticulo';

class Buscador extends React.Component {

    state = ({
        recuerdaArticulo : true
    })

    valor = '';

    noRecuerdaArticulo = () => {
        this.setState({
            recuerdaArticulo : !this.state.recuerdaArticulo
        })
    }

    traerArticulo = val =>{
        this.valor = val
        this.setState({ 
            recuerdaArticulo : !this.state.recuerdaArticulo
        })
    }

    render() {
        if(this.state.recuerdaArticulo)
        {
            return (
                <div>
                    <InputArticulo
                    valor={this.valor}
                    id={this.props.id}
                    noRecuerdaArticulo={this.noRecuerdaArticulo}
                    titulo={this.props.articulo}
                    />
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
