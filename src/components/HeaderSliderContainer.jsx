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
// import { Bounce, Rotate, Zoom } from 'react-awesome-reveal';

import 'swiper/css/effect-fade';
import HeaderSecond from './HeaderSecond';
import HeaderSecondCards from './HeaderSecondCards';
import { gsap } from 'gsap';
import { Zoom } from 'react-awesome-reveal';
import { useDispatch, useSelector } from 'react-redux';
import { getBannerList } from '../actions/MainAction';
import { Link } from 'react-router-dom';



const HeaderSliderContainer = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const dispatch=useDispatch();
    const bannerListArr=useSelector(state=>state.Data.bannerListArr)
    const isHeaderLoading=useSelector(state=>state.Data.isHeaderLoading)
    console.log(bannerListArr);
    useEffect(()=>{
        dispatch(getBannerList())
    },[dispatch])

    // useEffect(()=>{
    //     if(bannerListArr.length>0){
    //         swiperRef.current?.update()
    //     }
    // },[])


    let headerArr = [
        {
            id: 1,
            img: HeaderFirstImg,
            headerOne: 'İmtahan nəticələri üçün daxil olun'
        },
        {
            id: 2,
            img: HeaderSecondImg,
            headerOne: 'İmtahan nəticələri üçün daxil olun1'
        },
        {
            id: 3,
            img: HeaderThirdImg,
            headerOne: 'İmtahan nəticələri üçün daxil olun2'
        },
        {
            id: 4,
            img: HeaderFourImg,
            headerOne: 'İmtahan nəticələri üçün daxil olun3'
        },
        {
            id: 5,
            img: HeaderFiveImg,
            headerOne: 'İmtahan nəticələri üçün daxil olun4'
        }
    ]


    // useEffect(() => {
    //     let spanEl=document.querySelectorAll('.haeder_one span')
    //     let headEl=document.querySelectorAll('.haeder_one')

    //     // console.log(spanEl);
    //     // console.log(spanEl[0]);



    //     const interval = setInterval(() => {
    //         if (swiperRef.current && swiperRef.current.swiper) {
    //             setActiveIndex((prevIndex) => (prevIndex + 1) % headerArr.length);
    //             swiperRef.current.swiper.slideNext();

    //         }
    //         for(let i=0;i<spanEl.length;i++){
    //             // console.log(spanEl[i]);
    //             // spanEl[i].classList.add('activeSpan')

    //         }
    //         for(let i=0;i<headEl.length;i++){
    //             // console.log(spanEl[i]);
    //             headEl[i].classList.add('headActive')
    //         }

    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, []);




    useEffect(() => {
       
        const interval = setInterval(() => {
            if (swiperRef.current && swiperRef.current.swiper) {
                setActiveIndex((prevIndex) => (prevIndex + 1) % bannerListArr?.length);
                swiperRef.current.swiper.slideNext();
                
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex]);






    return (
        <div className='header_slider_container'>
            {
                bannerListArr.length>0?
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
                // touchRatio={1.5}
                // speed={500}
               
                
                
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
               
                {
                    // isHeaderLoading? ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis sed architecto molestiae optio. Cupiditate, fuga quaerat voluptatibus consectetur iste nulla ratione ab voluptates maiores voluptate, dolores, eius molestias minus.':
                    bannerListArr?.map((data, i) => {
                        return (
                            <SwiperSlide key={i} style={{
                                background: `url(${data?.image})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }} className='header_slider_card'>
                                {/* <img src={} alt="" /> */}
                                <div className="header_slider_bg_shadow">
                                    <div className="header_main_flex_container container">

                                        <div className='header_middle_container_content'>

                                            <h1 className='haeder_one'>
                                                {/* {data.headerOne.split('').map((letter, index) => {
                                                    return ( */}
                                                {

                                                    Array.from(data?.title).map((z, i) => {
                                                        // {console.log(z);}
                                                        return (
                                                            <span>{z}</span>
                                                        )
                                                    })
                                                }

                                            </h1>

                                            <Link to={data?.link}>
                                                <button><span>Read More</span></button>
                                            </Link>
                                            


                                        </div>

                                    </div>


                                </div>

                            </SwiperSlide>
                        )
                    })
                }


                {/* <SwiperSlide style={{
                    background: `url(${HeaderSecondImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} className='header_slider_card'>
                    <div className="header_slider_bg_shadow">
                        <div className="header_main_flex_container container">
                            <HeaderSecond />
                            <div className='header_middle_container_content'>

                                <h1 className='haeder_one'>İmtahan nəticələri üçün daxil olun</h1>

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

                                <h1 className='haeder_one'>İmtahan nəticələri üçün daxil olun</h1>

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

                                <h1 className='haeder_one'>İmtahan nəticələri üçün daxil olun</h1>

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

                                <h1 className='haeder_one'>İmtahan nəticələri üçün daxil olun</h1>

                                <button><span>Read More</span></button>


                            </div>
                            <HeaderSecondCards />
                        </div>
                    </div>
                </SwiperSlide> */}




            </Swiper>: ''
            }
           
        </div>
    )
}

export default HeaderSliderContainer