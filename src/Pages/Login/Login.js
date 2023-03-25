import React from 'react'
import './Login.scss'
import {Link} from 'react-router-dom';
import {FaGoogle} from 'react-icons/fa'

const Login = () => {
  return (
    <div className='login'>
      <h1>Login</h1>
        <input type={Text} placeholder={'Enter your email...'} /><br/>
        <input type={Text} placeholder={'Enter your password...'} />
        <div>
          <p>don't have an account?
        <Link to='/Register'><li>Register</li></Link>
        <Link to='/Reset'><li>Reset</li></Link>
          </p>
          <p>- or -</p>
          <button type='submit'><FaGoogle size={20}/>Login with Google</button>
        </div>
    </div>
  )
}

export default Login