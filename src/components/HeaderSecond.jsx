import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import HeaderSecondCards from './HeaderSecondCards'
import Nav from './Nav'


const HeaderSecond = () => {
    return (
        <div className='header_second_container_bg '>
            <div className="header_second_container container">
                <Logo/>
                {/* <HeaderSecondCards/> */}
                <Nav/>
            </div>
        </div>
    )
}

export default HeaderSecond