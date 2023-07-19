import React from 'react'
import LogoImg from '../images/logo (1).png'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to='/'>
            <img className='logo' src={LogoImg} alt="" />
        </Link>
    )
}

export default Logo