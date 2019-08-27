import React from 'react';
import './Selector.css';

class Select extends React.Component {
    
    constructor(){
        super();
        this.state = ({
          db : [], 
          estado: ''
        });
      }

      accion = e => {
        e.preventDefault();
        console.log(this.props.info)
      };

    render() {
        return (
            <div className="form-group col-md-10">
            <select onChange={this.accion} id="id_cat" className="form-control">
            <option  selected>Buscar Categoria...</option>
             {/* this.state.db.map(
                    dato=>
                    <option key={dato.id}>{dato.categoria}</option>
                )
             */} 
                                 <option >fhfghfgh</option>
                                 <option>fghfghfgh</option>
            </select>
        </div>
        );
    }
}

export default Select;




