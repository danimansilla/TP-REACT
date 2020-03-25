import React from 'react';

function Ciudad(){
    return(
    
        <div style={{display: "block"}}>
        <div className="row"> 
            <label  className="col-sm-12 col-form-label">Ciudad</label><br/>
            <div className="col-sm-12">
                <input type="text" className="form-control-plaintext" id="ciudad" value="Libertad" disabled></input>

            </div>
        </div>
</div>
      
    )
}
export default Ciudad;