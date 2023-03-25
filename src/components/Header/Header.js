import React from 'react';
import './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import {BiCart} from 'react-icons/bi'
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

import { GrList } from 'react-icons/gr';


const logo = ( <div>
  <div className='logo'>
    <h2>
      E<span>SHOP</span>
    </h2>
    </div>
</div>);

const Header = () => {
const [openNav, setOpenNav] = useState(false);

function toggleMenu(){
 setOpenNav(openNav => !openNav);
}
let toggle = openNav ? ' show-nav' : ' hide-nav';

  return (
 <header>
    <div className='header'>
    <Link to='/'>{logo}</Link>

      <nav className={`${toggle}`}>
        <ul >
          <li className='logo-mobile'>
            {logo}
          </li>
        <span><Link to='/admin/home'><li className='admin'>Admin</li></Link></span>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/Contact'><li>Contact Us</li></NavLink>  
        <NavLink to='/About'><li>About</li></NavLink>
        <NavLink to='/Login'><li>Login</li></NavLink>
        <NavLink to='/Register'><li>Register</li></NavLink>
        </ul>
        <div className='header-right'>
        <div className='cart'><NavLink to='/Cart'><BiCart className='gi2' size={25}/><p>0</p></NavLink></div>

          <span className='links'>
            <a href="#home">
              <FaUserCircle size={16} />
              Hi, user
            </a>
            <NavLink to="/order-history">
              My Orders
            </NavLink>
             <NavLink to='/Login'><li>Login</li></NavLink>
            <Link to="/" className='admin'>
              Logout
            </Link>
          </span>
        </div>
      </nav>

     <div className='menu-icon'>
        <GrList size={25} onClick={toggleMenu}/>
      </div> 
      
    </div>
    </header>
  )
}

export default Header