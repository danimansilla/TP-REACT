import React from 'react';

function Registro(){
    return(
        <div>
            Bienvenido al registro
            <form id="form" className="col-md-6">
                <div>
                <label>Nombre</label>
                <input type="text" placeholder="Ingresar su nombre" id="nombre" className="campo"></input>
                </div>
                
                <div>
                <label>Apellido</label>
                <input type="text" placeholder="Ingresar su apellido" id="apellido" className="campo"></input>
                </div>
                
                <div>
                <label>Email</label>
                <input type="email" placeholder="Ingresar su email" id="email" className="campo"></input>
                </div>
                
                <div>
                <label>Telefono</label>
                <input type="tel" placeholder="Ingresar su nombre"  id="tel"className="campo"></input>
                </div>
                
                <div>
                <label>Password</label>
                <input type="password" placeholder="Ingresar su contrasena" id="pass" className="campo"></input>
                </div>
                
                <div>
                <label>Confirmar password</label>
                <input type="password" placeholder="Ingresar nuevamente la contrasena"  id="repass"className="campo"></input>                             
                </div>
                <div>
                <input type="submit" value="Enviar formulario" id="btn"></input>
                </div>
                

            
            </form>
        </div>
    )
}
export default Registro;