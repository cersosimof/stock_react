import React from 'react';
import './App.css';
import Selector from './componentes/Selector';
import Cuerpo from './componentes/Cuerpo';

class App extends React.Component {
  
  state = {
    opcion : "ingresar"
  }

  handleState = e => {
    this.setState({
        opcion : e.target.id
    })
    console.log(e.target.id)
  }

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
