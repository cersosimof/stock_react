import React from 'react';
import './Selector.css';

class Select extends React.Component {

    
    constructor(props){
        super(props);
            this.state = {
            db : this.props.contenido 
        }
    }

    render() {
        return (

            <div class="form-group">
            <select class="custom-select" required>
            { this.props.infos.map(
                    info=>
                    <option key={info.id}>{info[this.props.contenido]}</option>
                    )
                } 
            </select>
            <div class="invalid-feedback">Example invalid custom select feedback</div>
          </div>

          
        );
    }
}

export default Select;




