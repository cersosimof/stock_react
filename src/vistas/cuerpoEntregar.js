import React from 'react';
import Buscador from '../componentes/Buscador';
import Cantidad from '../componentes/Cantidad';
import Boton from '../componentes/Boton';
import InputNormal from '../componentes/InputNormal'

class Entregar extends React.Component {
    render(){
        return (
            <div>
            <hr/>
                <div className="jumbotron">
                    <form>
                        {<Buscador id="_entregar" titulo="a entregar"/>}
                        {<Cantidad id="_entregar" titulo="a entregar"/>}
                        {<InputNormal titulo='Destinatario' id='idDestino' value='' visible={false}/>}
                        {<Boton onClick={this.ejecutarAccion} texto="Entregar"/>}
                    </form>
                </div>
            </div>
        )
    }
}

export default Entregar;