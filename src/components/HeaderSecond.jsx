import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import HeaderSecondCards from './HeaderSecondCards'


const HeaderSecond = () => {
    return (
        <div className='header_second_container_bg'>
            <div className="header_second_container container">
                <Logo/>
                <HeaderSecondCards/>
            </div>
        </div>
    )
}

export default HeaderSecond