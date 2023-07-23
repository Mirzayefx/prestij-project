import React from 'react'
import HeaderSecond from './HeaderSecond'
import HeaderSlider from './HeaderSlider'
import FixedSocial from './FixedSocial'
import HeaderSecondCards from './HeaderSecondCards'

const HeaderMainContainer = () => {
  return (
    <div className='header_main_container'>
      
         <HeaderSecond />
         <HeaderSecondCards />
        <HeaderSlider />
        <FixedSocial/>
        
    </div>
  )
}

export default HeaderMainContainer