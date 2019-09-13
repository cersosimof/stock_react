import React from 'react';

export default class Cantidad extends React.Component {

    ponerCantidad = e =>{
        document.getElementById(("eti"+this.props.id)).value=e.target.name
    }

    render() {
            return (
             <div>   
                <label htmlFor={"eti"+this.props.id}>Colocar el articulo {this.props.titulo}</label>
                <div className="input-group mb-3">
                <input type="text" className="form-control" id={"eti"+this.props.id}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" name="1" onClick={this.ponerCantidad} type="button">1</button>
                    <button className="btn btn-outline-secondary" name="2" onClick={this.ponerCantidad} type="button">2</button>
                    <button className="btn btn-outline-secondary" name="5" onClick={this.ponerCantidad} type="button">5</button>
                    <button className="btn btn-outline-secondary" name="10" onClick={this.ponerCantidad} type="button">10</button>
                    <button className="btn btn-outline-secondary" name="100" onClick={this.ponerCantidad} type="button">100</button>
                </div>
                </div>
            </div>
            )
    }
}
