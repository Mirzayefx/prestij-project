import React from 'react'
import { Link } from 'react-router-dom'
import FooterLogoImg from '../images/logo_footer.png'


const FooterLogo = () => {
  return (
    <Link to=''>
        <img src={FooterLogoImg} alt="" />
    </Link>
  )
}

export default FooterLogo