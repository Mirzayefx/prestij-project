import React, { useEffect } from 'react'

import OtherHeaderBg from "../images/AboutHeaderBg.webp"
import HeaderSecond from './HeaderSecond'
import OtherHeaderContent from './OtherHeaderContent'
import { useDispatch, useSelector } from 'react-redux'
import { getSettingsList } from '../actions/MainAction'

const OtherHeaderMainContainer = ({otherHeaderMainContent,otherPageBanner}) => {

  // const dispatch=useDispatch()
  // const settingsListArr=useSelector(state=>state.Data.settingsListArr)

  // useEffect(()=>{
  //   dispatch(getSettingsList())
  // },[dispatch])

  // console.log(settingsListArr);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.header_second_container_bg');
      const otherHeaderMainContainer = document.querySelector('.other_header_main_container');

      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('bg');
          
        } else {
          navbar.classList.remove('bg');
          
        }
      }
    };

    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='other_header_main_container' style={{background: `url(${otherPageBanner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '100%' }}>
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