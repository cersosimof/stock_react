import React from 'react';
import './Selector.css';

class Select extends React.Component {
    
    constructor(){
        super();
        this.state = ({
        url : "http://localhost/stock_react/back/",
        db : [],
        estado : ''
    })
    }
    
    UNSAFE_componentWillMount(){
        fetch(this.state.url)
        .then((response)=>response.json())
        .then((responseJson)=>
            {
                this.setState({ 
                db: responseJson //Guarda la info en el primer select
                })
            })
        }

    render() {
        return (
            <div hidden={this.props.oculto} className="form-group col-md-10">
                <select className="form-control" id={this.props.contenido} value={this.state.value} onChange={this.props.traerInfo}>
                { this.state.db.map(
                    dato=>
                    <option key={dato.id}> {dato[this.props.contenido]} </option>
                    )
                    } 
                </select>
            </div>
        );
    }
}

export default Select;




