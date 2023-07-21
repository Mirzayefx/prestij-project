import React from 'react'

import OtherHeaderBg from "../images/AboutHeaderBg.webp"
import HeaderSecond from './HeaderSecond'
import OtherHeaderContent from './OtherHeaderContent'

const OtherHeaderMainContainer = ({otherHeaderMainContent}) => {
  return (
    <div className='other_header_main_container' style={{background: `url(${OtherHeaderBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '100%' }}>
        <div className="other_bg_shadow">
            <div className="container">
                <HeaderSecond/>
                <OtherHeaderContent otherHeaderMainContent={otherHeaderMainContent}/>
            </div>
            
        </div>
        
    </div>
  )
}

export default OtherHeaderMainContainer