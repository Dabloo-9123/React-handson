import React, { Component } from "react";
import '../App.css';
class classcompo extends Component{
    render()
    {
      return(
            <>
             <div className="Fdiv Cdiv">
          <h1>This is Created Using Class Component</h1>
            <p className="para">This is done using External css</p>
            <p style={{color:'red'}}>This is done using inline css</p>
          </div>
            </>
      )
    }

   
}
export default classcompo;