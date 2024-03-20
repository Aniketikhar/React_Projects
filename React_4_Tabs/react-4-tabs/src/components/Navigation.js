import React, { useState } from 'react'

const Navigation = ({onclickHandler}) => {

    const raju = 1;
    const chutki = 2;
    const bhim = 3;
    const [check , setCheck] = useState(1);
    
    const dholakpur = (koun) => {
      onclickHandler(koun)
      setCheck(koun)
      
  
    }
       


  return (
    <div className="row">
    <div className="col-sm-4 col-md-4 col-lg-12 mb-3"><button className={(check === 1)? "style-btn" : "inactive"} onClick={() => dholakpur(raju)}>TOMMY</button></div>
    <div className="col-sm-4 col-md-4 col-lg-12 mb-3"><button className={(check === 2)? "style-btn" : "inactive"} onClick={() => dholakpur(chutki)}>BIGDROP</button></div>
    <div className="col-sm-4 col-md-4 col-lg-12 mb-3"><button className={(check === 3)? "style-btn" : "inactive"} onClick={() => dholakpur(bhim)}>CUKER</button></div>
  </div>
  )
}

export default Navigation
