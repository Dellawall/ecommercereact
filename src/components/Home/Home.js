import React from 'react'
import './Home.scss'

import Header from '../Header/Header';
import Slider from '../slider/Slider'
import Footer from '../Footer/Footer';
import App from '../../App';
import Contact from '../../Pages/Contact/Contact';
import About from '../../Pages/About/About';
import Admin from '../../Pages/Admin/Admin';
import Cart from '../../Pages/Cart/Cart';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from '../../Pages/Products/Products';
 


const Home = () => {
  return (
    <div>
 <BrowserRouter>
    <Header/>
    <Slider/>
    <Routes>
       <Route path='/App' element={<App/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Register' element={<Register/>}/>
       <Route path='/Admin' element={<Admin/>}/>
       <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    <Products />
    <Footer/>

    </div>
  )
}

export default Home