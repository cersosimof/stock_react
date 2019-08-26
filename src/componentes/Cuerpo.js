import React from 'react';
import Buscador from './InputBuscarArticulo';

class Cuerpo extends React.Component {

    render() {
        if(this.props.mostrar === "ingresar")
        {
            return (
                <div>
                <hr/> 
                    <div className="jumbotron">
                        <form>
                            <div id="info_ingresar">
                                {/*PRESENTA INFO, ALERTAS*/}
                            </div>
                                {<Buscador id="_ingresar" titulo="a ingresar"/>}
                            <div className="form-group row" id="divCantidad">
                                <label htmlFor="idCantidad" className="col-sm-2 col-form-label" id="labelCantidad">Cantidad a Ingresar</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="cantidad_ingresar"/>
                                </div>
                            </div>
                            <div id="lugarBoton">
                                <button className="btn btn-success" id="bsi">Ingresar</button>
                            </div>
                        </form>
                    </div>                   
                </div>
            );
        }
        else if(this.props.mostrar === "entregar")
        {
            return (
                <div>
                <hr/>
                    <div className="jumbotron">
                        <form>
                            <div id="info_entregar">
                                {/*PRESENTA INFO, ALERTAS*/}
                            </div>
                            {<Buscador id="_entregar" titulo="a entregar"/>}
                            <div className="form-group row">
                                <label for="idCantidad" className="col-sm-2 col-form-label">Cantidad a retirar</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="cantidad_entregar"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="idDestino" className="col-sm-2 col-form-label">Destinatario</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="idDestino"/>
                                </div>
                            </div>       
                            <div id="lugarBoton">
                                <button className="btn btn-danger" id="bse">Entregar</button>
                            </div>
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

