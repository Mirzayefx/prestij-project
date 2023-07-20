import React, { useEffect, useRef, useState } from 'react'
import { Keyboard, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import HeaderFirstImg from '../images/headerFirstImg.jpeg'
import HeaderSecondImg from '../images/headerSecondImg.jpeg'
import HeaderThirdImg from '../images/headerThird.jpeg'
import HeaderFourImg from '../images/headerFourImg.jpeg'
import HeaderFiveImg from '../images/headerFiveImg.jpeg'
import { Bounce, Rotate, Zoom } from 'react-awesome-reveal';

import 'swiper/css/effect-fade';
import HeaderSecond from './HeaderSecond';
import HeaderSecondCards from './HeaderSecondCards';




const HeaderSliderContainer = () => {
    const swiperRef = useRef(null);


    useEffect(() => {

        const interval = setInterval(() => {
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.slideNext();
            }
        }, 8000);

        return () => clearInterval(interval);
    }, []);







    return (
        <div className='header_slider_container'>
            <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                keyboard={{
                    enabled: true,
                }}
                grabCursor
                autoplay={true}
                effect='fade'
                // pagination={{
                //     clickable: false,
                // }}
                // pagination={{
                //     type: 'fraction',
                // }}
                // navigation={{
                //     nextEl: ".slider_next_btn",
                //     prevEl: ".slider_prev_btn"
                // }}
                pagination={{ type: 'bullets', clickable: true }}
                modules={[Keyboard, Pagination, Navigation, EffectFade]}
                className="mySwiper header_slider_cards_container"
            >


                <SwiperSlide style={{
                    background: `url(${HeaderFirstImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} className='header_slider_card'>
                    {/* <img src={} alt="" /> */}
                    <div className="header_slider_bg_shadow">
                        <div className="header_main_flex_container container">
                            <HeaderSecond />
                            <div className='header_middle_container_content'>

                                <h1 className='rotateInDownLeft'>
                                    İmtahan nəticələri üçün daxil olun</h1>

                                <button><span>Read More</span></button>


                            </div>
                            <HeaderSecondCards />
                        </div>


                    </div>

                </SwiperSlide>
                <SwiperSlide style={{
                    background: `url(${HeaderSecondImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} className='header_slider_card'>
                    <div className="header_slider_bg_shadow">
                        <div className="header_main_flex_container container">
                            <HeaderSecond />
                            <div className='header_middle_container_content'>

                                <h1>İmtahan nəticələri üçün daxil olun</h1>

                                <button><span>Read More</span></button>


                            </div>
                            <HeaderSecondCards />
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide style={{
                    background: `url(${HeaderThirdImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} className='header_slider_card'>
                    <div className="header_slider_bg_shadow">
                        <div className="header_main_flex_container container">
                            <HeaderSecond />
                            <div className='header_middle_container_content'>

                                <h1>İmtahan nəticələri üçün daxil olun</h1>

                                <button><span>Read More</span></button>


                            </div>
                            <HeaderSecondCards />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{
                    background: `url(${HeaderFourImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} className='header_slider_card'>
                    <div className="header_slider_bg_shadow">
                        <div className="header_main_flex_container container">
                            <HeaderSecond />
                            <div className='header_middle_container_content'>

                                <h1>İmtahan nəticələri üçün daxil olun</h1>

                                <button><span>Read More</span></button>


                            </div>
                            <HeaderSecondCards />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{
                    background: `url(${HeaderFiveImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} className='header_slider_card'>
                    <div className="header_slider_bg_shadow">
                        <div className="header_main_flex_container container">
                            <HeaderSecond />
                            <div className='header_middle_container_content '>

                                <h1>İmtahan nəticələri üçün daxil olun</h1>

                                <button><span>Read More</span></button>


                            </div>
                            <HeaderSecondCards />
                        </div>
                    </div>
                </SwiperSlide>




            </Swiper>
        </div>
    )
}

export default HeaderSliderContainer