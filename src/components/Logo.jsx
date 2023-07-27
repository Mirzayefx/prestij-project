import React from 'react'
import LogoImg from '../images/logo_footer.png'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to='/prestij-project'>
            <img className='logo' src={LogoImg} alt="" />
        </Link>
    )
}

export default Logo