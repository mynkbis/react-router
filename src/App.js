import React from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom'
import Admin from './Pages/admin'
import About from './Pages/About'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Navbar from './Components/Navbar';
import Welcome from './Pages/welcome';
import Error from './Pages/Error';
import Features from './Components/Features';
import Widget from './Components/Widget';
import Product from './Pages/product';

import ProductDetails from './Components/singleProduct';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>       
        <Route path='/home' element={<Home/>}>
         
          {/* <Route index element={<Features />}></Route> */}
           <Route  path='Widget' element={ <Widget/>} />
          <Route  path='Features' element={ <Features/>} />
        </Route>
        
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/welcome' element={<Welcome />} />
        <Route path='*' element={<Error />} />
        <Route exact path='/product' element={<Product />}>
        <Route exact path=':ProductId' element={<ProductDetails />} />
         {/* // :productId will match the  any value as long as pattern is same */}
         <Route exact path='admin' element={<Admin/>}/>
               </Route>
         </Routes>
    </div>
  );
}

export default App;
