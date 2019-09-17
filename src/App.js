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

  solapa = {
    activa : 'ingresar'
  }

  handleState = e => {
    e.preventDefault();
    //e.target.classList.toggle("resaltado");
    this.setState({
        opcion : e.target.id
    })
    this.solapa.activa = e.target.id;
  };

  render() {
    return (
      <div>
        <Selector handleState={this.handleState} />
        <Cuerpo mostrar={this.solapa.activa}/>
      </div>
    );
  }

}

export default App;
