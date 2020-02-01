import React from 'react';
import Buscador from '../componentes/Buscador';
import Cantidad from '../componentes/Cantidad';
import Boton from '../componentes/Boton'

class Ingresar extends React.Component {

    ingresar = (e) =>{
        e.preventDefault();
        let nroArticulo = document.querySelector("#_ingresar").value;
        let cantidad = document.querySelector("#eti_ingresar").value;

        fetch("http://192.168.64.2/stock_react/back/acciones.php?codigo="+nroArticulo+"&cantidad="+cantidad+"&accion=ingresar")
        .then((response)=>response.json())
        .then((responseJson)=>
            {
                if(responseJson===1)
                {
                    alert("Se actualizo el Stock")
                }
            })
            .catch((error) => {
                alert('Error, intente nuevamente.')
                console.error(error)
            })
    }


    render(){
        return (
            <div>
            <hr/> 
                <div className="jumbotron">
                    <form>
                        {<Buscador  id="_ingresar" titulo="a ingresar"/>}
                        {<Cantidad id="_ingresar" titulo="a ingresar"/>}
                        {<Boton onClick={this.ingresar} texto="Ingresar"/>}
                    </form>
                </div>                   
            </div>
        )
    }
}

export default Ingresar;