import React from 'react';
import Nombre from './Nombre';
import Foto from './Foto';
import Ciudad from './Ciudad';
function PerfilUsuario(){
    return (
        <div className="jumbotron">
        <p className="lead text-center perfil">Perfil de usuario</p> 
        <div className="colum">
      
            <div className="col-sm-4">
                <Nombre />
                <Ciudad />
            </div>
            <div className="col-sm-8">
            <Foto/>
            </div>
            </div>
           
            
     
  </div>
    )
}
export default PerfilUsuario;


 