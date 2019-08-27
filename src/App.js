import React from 'react';
import './App.css';
import Selector from './componentes/Selector';
import Cuerpo from './componentes/Cuerpo';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = ({
      //db : []
      opcion : "ingresar"
    });
    //this.cargarBase();
  }

  // cargarBase(){
  //   fetch("http://localhost/stock_react/back/")
  //   .then((response)=>response.json())
  //   .then((responseJson)=>
  //   {
  //     this.setState({ 
  //       db: responseJson
  //     })
  //     console.log(this.state.db)
  //   })
  // }

  handleState = e => {
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
