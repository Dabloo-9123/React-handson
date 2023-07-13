// import logo from './logo.svg';
import './App.css';
import Functioncomp from './Component/function';
import Classcompo from './Component/class';
import { useState } from 'react';

function App() {
  const [fstate,setFstate]=useState(false);
  const [cstate,setCstate]=useState(false)
  return (
    <>
    <h1 className='head1'>Styling Using Functional and Class Component</h1>
    <button onClick={()=>setFstate(!fstate)}>To see Styling in Functional Component</button>
    <button onClick={()=>setCstate(!cstate)}>To see Styling in Class Component</button>
    
   <div className='cont'>
   {fstate ? <Functioncomp/> :" "}
    {cstate ? <Classcompo/> :" "}
   </div>
    </>
    );
}

export default App;

