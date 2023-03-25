import React from 'react'
import './Footer.scss'
import axios from 'axios'
import {AiOutlineCopyright} from 'react-icons/ai'
import {useEffect} from 'react'


 const Footer = () => {
useEffect(() => {
  axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')

  .then((response) => {
    console.log(response);
  })
})


  return (
    <div className='frog'>
      <p><AiOutlineCopyright />Olawale</p>
    </div>
  )
}

export default Footer
