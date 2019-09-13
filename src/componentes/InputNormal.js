import React from 'react';

export default class InputNormal extends React.Component {
    render() {
        return (
            <div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">{this.props.titulo}</label>
                    <div className="col-sm-10">
                        <input id={this.props.id} type="text" className="form-control" value={this.props.valor} readOnly/>
                    </div>
                </div>
            </div>
        )
    }
}




