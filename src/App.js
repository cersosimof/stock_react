import React from 'react';
import './App.css';
import Selector from './componentes/Selector';
import Cuerpo from './componentes/Cuerpo';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = ({
      opcion : "ingresar"
    });
  }

  handleState = e => {
    e.preventDefault();
    this.setState({
        opcion : e.target.id
    })
  };

  render() {
    return (
      <div>
        <Selector handleState={this.handleState} />
        <Cuerpo mostrar={this.state.opcion}/>
      </div>
    );
  }

}

export default App;
