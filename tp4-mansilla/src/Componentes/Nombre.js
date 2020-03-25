import React from 'react';

function NombreComponente(){

    return (
        // <div style={{display: "block"}}>
                <div className="row"> 
                    <label  className="col-sm-12 col-form-label">Nombre</label><br/>
                    <div className="col-sm-12">
                        <input type="text" className="form-control-plaintext" id="nombre" value="Angela Mansilla" disabled></input>

                    </div>
                </div>
        // </div>
    )
}
export default NombreComponente;