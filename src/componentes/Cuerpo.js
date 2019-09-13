import React from 'react';
import Buscador from './Buscador';
import Cantidad from './Cantidad';

/*
CUERPO INCLUYE TODO EL FORM
BUSCADOR
    GRUPO SELECT
        SELECT
        SELECT
        SELECT
*/

class Cuerpo extends React.Component {

    ejecutarAccion = (e) =>{
        console.log(document.querySelector("#art").value)
        console.log(document.querySelector("#eti_"+this.props.mostrar).value)
    }

    render() {
        if(this.props.mostrar === "ingresar")
        {
            return (
                <div>
                <hr/> 
                    <div className="jumbotron">
                        <form>
                            {<Buscador  id="_ingresar" titulo="a ingresar"/>}
                            {<Cantidad id="_ingresar" titulo="a ingresar"/>}
                            <button type="button" onClick={this.ejecutarAccion} className="btn btn-secondary btn-lg btn-block">Ingresar</button>
                        </form>
                    </div>                   
                </div>
            )
        }
        else if(this.props.mostrar === "entregar")
        {
            return (
                <div>
                <hr/>
                    <div className="jumbotron">
                        <form>
                            {<Buscador id="_entregar" titulo="a entregar"/>}
                            {<Cantidad id="_ingresar" titulo="a entregar"/>}
                            <div className="form-group row">
                                <label htmlFor="idDestino" className="col-sm-2 col-form-label">Destinatario</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="idDestino"/>
                                </div>
                            </div>       
                            <button type="button" class="btn btn-secondary btn-lg btn-block">Entregar</button>
                        </form>
                    </div>
                </div>
            )
        }
        else if(this.props.mostrar === "consultar")
        {
            return (
                <div>
                <hr/>
                    <div className="jumbotron">
                        <form>
                            <input type="hidden" id="selector" value="consultar"/>
                            {<Buscador id="_consultar"/>}
                            <div id="lugarBoton">
                                <button className="btn btn-success" id="botonSubmit">Consultar Stock</button>
                            </div> 
                        </form>
                    </div>
                </div>
            )
        }

    }
}

export default Cuerpo;

