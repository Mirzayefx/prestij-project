import React from 'react'
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const FixedSocial = () => {
  return (
    <div className='fixed_social'>
        <div>
            <Link to=""><BsFacebook className='fixed_social_icon'/></Link></div>
        <div>
            <Link to=""><BsInstagram className='fixed_social_icon'/></Link></div>
        <div>
            <Link to=""><BsYoutube className='fixed_social_icon'/></Link></div>
    </div>
  )
}

export default FixedSocial