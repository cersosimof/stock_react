import React from 'react';

export default class Select extends React.Component {
    render() {
        return (
            <div className="form-group">
            <select name={this.props.contenido} className="custom-select" onChange={this.props.handleChange}>
            <option key="0">Seleccione {this.props.contenido}</option>   
            { 
                this.props.infos.map(
                    info=><option key={info.id}>{info[this.props.contenido]}</option>
                )
            } 
            </select>
          </div>
        )
    }
}




