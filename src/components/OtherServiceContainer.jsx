import React from 'react'
import LatestNews from './LatestNews'
import OtherServiceContent from './OtherServiceContent'
import Services from './Services'

const OtherServiceContainer = () => {
    return (
        <div className='other_about_container container'>
            {/* <OtherServiceContent /> */}
            <OtherServiceContent/>
            <LatestNews />
        </div>
    )
}

export default OtherServiceContainer