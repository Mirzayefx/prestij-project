import React, { useEffect, useRef } from 'react'
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TestImg from '../images/headerFirstImg.jpeg'
import TestImg1 from '../images/36.jpeg'
import TestImg2 from '../images/39.jpeg'
import TestImg3 from '../images/headerFirstImg.jpeg'
import TestImg4 from '../images/firstImg.jpeg'
import TestImg5 from '../images/firstImg2.jpeg'
import TestImg6 from '../images/headerFiveImg.jpeg'
import { BsLink45Deg } from "react-icons/bs";
import { LiaCalendarSolid } from "react-icons/lia"
import { useDispatch, useSelector } from 'react-redux';
import { getNewsList } from '../actions/MainAction';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';

const NewsContainer = () => {
    const swiperNewsRef = useRef(null);

    const dispatch = useDispatch()
    const newsListArr = useSelector(state => state.Data.newsListArr)
    useEffect(() => {
        dispatch(getNewsList())
    }, [dispatch])

    console.log(newsListArr);
    useEffect(() => {
        const interval = setInterval(() => {
            if (swiperNewsRef.current && swiperNewsRef.current.swiper) {
                swiperNewsRef.current.swiper.slideNext();
            }
        }, 8000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='news_container container'>

            <Swiper

                ref={swiperNewsRef}
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                keyboard={{
                    enabled: true,
                }}
                grabCursor
                autoplay={{
                    delay: 3000
                }}

                // pagination={{
                //     clickable: false,
                // }}
                // pagination={{
                //     type: 'fraction',
                // }}
                navigation={{
                    nextEl: ".slider_next_btn1",
                    prevEl: ".slider_prev_btn1"
                }}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper news_slider_card_container"
            >


                {
                    newsListArr.map((data, i) => {
                        return (

                            <SwiperSlide className='news_slider_card'>
                                <Link key={i} to={`/xeberler/${data.title}/${data.id}`}>
                                    <img src={data.image} alt="" />


                                    <h3 className='new_slider_card_content_header'>{data.title}</h3>
                                    <div className="new_slider_card_content">
                                        <h3 >{data.title}</h3>
                                        <p>{DOMPurify.sanitize(data.content).replace(/<[^>]+>/g, '')}</p>
                                        <div className='news_slider_card_end'>
                                            <LiaCalendarSolid className='calendar' />
                                            <span>{data.pub_date}</span>
                                        </div>
                                    </div></Link>
                            </SwiperSlide>


                        )
                    })
                }





            </Swiper>
            <div className="news_swiper_btns">
                <div className="swiper_button slider_prev_btn1">
                    <IoIosArrowBack />
                </div>
                <div className="swiper_button slider_next_btn1">
                    <IoIosArrowForward />
                </div>
            </div>

        </div>
    )
}

export default NewsContainer