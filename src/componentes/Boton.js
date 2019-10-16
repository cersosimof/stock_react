import React from 'react';

export default class Boton extends React.Component {
    render() {
        return (
            <button type="button" onClick={this.props.onClick} className="btn btn-secondary btn-lg btn-block">{this.props.texto}</button>
        )
    }
}