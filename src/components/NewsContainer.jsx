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

const NewsContainer = () => {
    const swiperNewsRef = useRef(null);
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



                <SwiperSlide className='news_slider_card'>

                    <img src={TestImg} alt="" />
                    {/* <div className="news_slider_card_link_bg_shadow">
                            <BsLink45Deg className="news_slider_card_link" />
                        </div> */}
                    <h3 className='new_slider_card_content_header'>Abituriyentlər üçün psixoloji seminar</h3>
                    <div className="new_slider_card_content">
                        <h3>Abituriyentlər üçün psixoloji seminar</h3>
                        <p>Məntiq Olimpiadasının qalibləri məlum oldu.</p>
                        <div className='news_slider_card_end'>
                            <LiaCalendarSolid className='calendar' />
                            <span>06.11.2018</span>
                        </div>
                    </div>


                    {/* <p>Məntiq Olimpiadasının qalibləri məlum oldu.</p>
                    <div className='news_slider_card_end'>
                        <LiaCalendarSolid />
                        <span>06.11.2018</span>
                    </div> */}
                </SwiperSlide>
                <SwiperSlide className='news_slider_card'>
                    {/* <div className='news_slider_card_img'> */}
                    <img src={TestImg1} alt="" />
                    {/* <div className="news_slider_card_link_bg_shadow">
                            <BsLink45Deg className="news_slider_card_link" />
                        </div> */}
                    {/* </div> */}
                    <h3 className='new_slider_card_content_header'>Abituriyentlər üçün psixoloji seminar</h3>
                    <div className="new_slider_card_content">
                        <h3>Abituriyentlər üçün psixoloji seminar</h3>
                        <p>Məntiq Olimpiadasının qalibləri məlum oldu.</p>
                        <div className='news_slider_card_end'>
                            <LiaCalendarSolid className='calendar' />
                            <span>06.11.2018</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='news_slider_card'>

                    <img src={TestImg2} alt="" />


                    <h3 className='new_slider_card_content_header'> -Prestij-S Tədris Mərkəzi peşəkar və təcrübəli müəllimləri əməkdaşlığa dəvət edir!</h3>
                    <div className="new_slider_card_content">
                        <h3 > -Prestij-S Tədris Mərkəzi peşəkar və təcrübəli müəllimləri əməkdaşlığa dəvət edir!</h3>
                        <p>Məntiq Olimpiadasının qalibləri məlum oldu.</p>
                        <div className='news_slider_card_end'>
                            <LiaCalendarSolid className='calendar' />
                            <span>06.11.2018</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='news_slider_card'>

                    <img src={TestImg3} alt="" />


                    <h3 className='new_slider_card_content_header'> -Prestij-S Tədris Mərkəzi peşəkar və təcrübəli müəllimləri əməkdaşlığa dəvət edir!</h3>
                    <div className="new_slider_card_content">
                        <h3 > -Prestij-S Tədris Mərkəzi peşəkar və təcrübəli müəllimləri əməkdaşlığa dəvət edir!</h3>
                        <p>Məntiq Olimpiadasının qalibləri məlum oldu.</p>
                        <div className='news_slider_card_end'>
                            <LiaCalendarSolid className='calendar' />
                            <span>06.11.2018</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='news_slider_card'>

                    <img src={TestImg4} alt="" />


                    <h3 className='new_slider_card_content_header'> -Prestij-S Tədris Mərkəzi peşəkar və təcrübəli müəllimləri əməkdaşlığa dəvət edir!</h3>
                    <div className="new_slider_card_content">
                        <h3 > -Prestij-S Tədris Mərkəzi peşəkar və təcrübəli müəllimləri əməkdaşlığa dəvət edir!</h3>
                        <p>Məntiq Olimpiadasının qalibləri məlum oldu.</p>
                        <div className='news_slider_card_end'>
                            <LiaCalendarSolid className='calendar' />
                            <span>06.11.2018</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='news_slider_card'>

                    <img src={TestImg5} alt="" />


                    <h3 className='new_slider_card_content_header'> -Prestij-S Tədris Mərkəzi peşəkar və təcrübəli müəllimləri əməkdaşlığa dəvət edir!</h3>
                    <div className="new_slider_card_content">
                        <h3 > -Prestij-S Tədris Mərkəzi peşəkar və təcrübəli müəllimləri əməkdaşlığa dəvət edir!</h3>
                        <p>Məntiq Olimpiadasının qalibləri məlum oldu.</p>
                        <div className='news_slider_card_end'>
                            <LiaCalendarSolid className='calendar' />
                            <span>06.11.2018</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='news_slider_card'>

                    <img src={TestImg6} alt="" />


                    <h3 className='new_slider_card_content_header'> -Prestij-S Tədris Mərkəzi peşəkar və təcrübəli müəllimləri əməkdaşlığa dəvət edir!</h3>
                    <div className="new_slider_card_content">
                        <h3 > -Prestij-S Tədris Mərkəzi peşəkar və təcrübəli müəllimləri əməkdaşlığa dəvət edir!</h3>
                        <p>Məntiq Olimpiadasının qalibləri məlum oldu.</p>
                        <div className='news_slider_card_end'>
                            <LiaCalendarSolid className='calendar' />
                            <span>06.11.2018</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='news_slider_card'>

                    <img src={TestImg1} alt="" />


                    <h3 className='new_slider_card_content_header'> -Prestij-S Tədris Mərkəzi peşəkar və təcrübəli müəllimləri əməkdaşlığa dəvət edir!</h3>
                    <div className="new_slider_card_content">
                        <h3 > -Prestij-S Tədris Mərkəzi peşəkar və təcrübəli müəllimləri əməkdaşlığa dəvət edir!</h3>
                        <p>Məntiq Olimpiadasının qalibləri məlum oldu.</p>
                        <div className='news_slider_card_end'>
                            <LiaCalendarSolid className='calendar' />
                            <span>06.11.2018</span>
                        </div>
                    </div>
                </SwiperSlide>



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