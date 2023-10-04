import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { data } from './Functions/essentials';
import Landingpage from './Components/Landing-Page/Landingpage';
import {Route,Routes} from "react-router-dom"
import Criteria from './Components/Criteria/Criteria';
import Moredetails from './Components/Moredetails/Moredetails';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch({
      type:"information",
      payload:data
    })
  },[])
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/criteria/:id' element={<Criteria/>} />
        <Route path='/moredetails/:id/:idx' element={<Moredetails/>} />
        <Route path='/moredetails/:id' element={<Moredetails/>} />
      </Routes>
    </div>
  );
}

export default App;
