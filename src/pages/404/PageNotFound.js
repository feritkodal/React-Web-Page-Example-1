import React from 'react'
import Image from '../../images/pagenotfound.png'
import './PageNotFound.css'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='deneme'>
      <div>
        <h1 className='text'>Sorry, this page doesn't exist</h1>
        <NavLink to="/" className='text2'>Go To Home Page</NavLink>
      </div>
      <img src={Image}  alt="not found" className='img'/>
    </div>
  )
}

export default PageNotFound