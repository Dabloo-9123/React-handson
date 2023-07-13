import React from "react";
import '../App.css';
function functioncomp()
{
      return (
            <>
          <div className="Fdiv">
          <h1>This is Created Using Functional Component</h1>
            <p className="para">This is done using External css</p>
            <p style={{color:'red'}}>This is done using inline css</p>
          </div>
            </>
      )
}

export default functioncomp;