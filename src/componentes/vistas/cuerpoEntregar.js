import React from 'react';
import Buscador from '../Buscador';
import Cantidad from '../Cantidad';
import Boton from '../Boton';
import InputNormal from '../InputNormal'

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