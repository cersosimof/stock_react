import React from 'react';
import './Selector.css';

class Select extends React.Component {

    state = {
        db : this.props.contenido
    }

    componentDidMount(){
        this.setState({
            db : this.props.contenido
        })
    }

    render() {
        return (
            <div className="form-group col-md-10">
                <select name={this.state.db} onChange={this.props.handleChange} className="form-control">
                { this.props.infos.map(
                    info=>
                    <option key={info.id}>{info[this.props.contenido]}</option>
                    )
                    } 
                </select>
            </div>
        );
    }
}

export default Select;




