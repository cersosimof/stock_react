import React from 'react';


class Formulario extends React.Component {

    state = {
        categoria : "",
        marca : "",
        modelo : "",
        notas : "", 
        stock : "",
        alerta : ""   
    }

    onchange = e => {
        this.setState({ [e.target.name] : e.target.value })
        console.log(e.target.value)
    }

    onsubmit = e => {
        e.preventDefault();
        console.log("Se envio el formulario...")
    }
    render() {
        return (
            <div>
                <h2>{this.props.titulo}</h2>
                <form action='?enviando=1' onSubmit={this.onsubmit} method='POST' className="needs-validation">
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="idCat">Categoria</label>
                            <input type="text" name="categoria" className="form-control" onChange={this.onchange} id="idCat" value={this.state.categoria}/>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="idMarca">Marca</label>
                            <input type="text" name="marca"  className="form-control" onChange={this.onchange} id="idMarca"value={this.state.marca}/>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="idMod">Modelo</label>
                            <div className="input-group">
                            <input type="text" name="modelo" className="form-control" onChange={this.onchange} id="idMod" value={this.state.modelo}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="idNotas">Notas:</label>
                            <input type="text" name="notas" className="form-control" onChange={this.onchange} id="idNotas" value={this.state.notas}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="idStock">Stock Inicial</label>
                            <input type="text" name="stock" className="form-control" onChange={this.onchange} id="idStock" value={this.state.stock}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="idAlerta">Alerta</label>
                            <input type="text" name="alerta" className="form-control" onChange={this.onchange} id="idAlerta" value={this.state.alerta}/>
                        </div>
                    </div>
                    <button className="btn btn-primary" id="btnSubmit" type="submit">Dar ingreso!</button>
                </form>
            </div>
        );
    }
}

export default Formulario;
