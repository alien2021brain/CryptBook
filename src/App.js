

import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage';
import {makeStyles} from "@material-ui/core"

const useStyles =makeStyles(()=>({
  App: {
    backgroundColor:'#14161a',
    
    minHeight:"100vh"
  }
}))




function App() {
  const classes=useStyles()
  return (
  <BrowserRouter>
  <div className={classes.App}>
  <Header/>
  <Routes>
    <Route path="/" element={<>
      
      <Homepage></Homepage>
      </>}></Route>

      <Route path="/coins/:id" element={
        <CoinPage/>
      }>
      </Route>
  
  
  </Routes>
  </div>

  
  </BrowserRouter>
    
    
      

    
          

      
    
  

  );
}

export default App;
