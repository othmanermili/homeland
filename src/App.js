import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import PropertyDetails from './pages/PropertyDetails'
import Login from './pages/Login_in'
import Signup from './pages/Signup';


const App = () => {
  return(
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/property/:id' element={<PropertyDetails/>}></Route>
        <Route path='/login_in' element={<Login/>}></Route>
        <Route path='/sign_up' element={<Signup/>}></Route>
      </Routes>
      <Footer/>
    </div>
  
  );
};

export default App;
