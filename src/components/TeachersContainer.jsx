import React, { useEffect, useRef, useState } from 'react'
import { Keyboard, Pagination, Navigation, Controller, EffectCube } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TeacherImg from '../images/muellim.jpeg'
import TeacherImg1 from '../images/8_thumb.jpeg'
import TeacherImg2 from '../images/9_thumb.jpeg'
import TeacherImg3 from '../images/5_thumb.jpeg'
import { BsLink45Deg } from "react-icons/bs";
import VanillaTilt from 'vanilla-tilt';
import { FaQuoteLeft } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { getTeachersList } from '../actions/MainAction';
// import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"


const TeachersContainer = () => {


    const dispatch = useDispatch()
    const teachersListArr = useSelector(state => state.Data.teachersListArr)
    useEffect(() => {
        dispatch(getTeachersList())
    }, [dispatch])

    console.log(teachersListArr);

    // const teacherData = [
    //     {
    //         name: 'Rasim Rəhimov',
    //         subject: 'Coğrafiya',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officiis expedita incidunt culpa laboriosam eligendi rerum iste! Similique fugiat non assumenda itaque accusamus molestiae est explicabo, harum quisquam modi animi?',
    //         image: TeacherImg,
    //     },
    //     {
    //         name: 'Rasim Rəhimov1',
    //         subject: 'Coğrafiya',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officiis expedita incidunt culpa laboriosam eligendi rerum iste! Similique fugiat non assumenda itaque accusamus molestiae est explicabo,',
    //         image: TeacherImg1,
    //     },
    //     {
    //         name: 'Rasim Rəhimov2',
    //         subject: 'Coğrafiya',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officiis expedita incidunt culpa laboriosam eligendi rerum iste! Similique fugiat non assumenda itaque accusamus molestiae est explicabo, harum quisquam modi animi?',
    //         image: TeacherImg2,
    //     },
    //     {
    //         name: 'Rasim Rəhimov3',
    //         subject: 'Coğrafiya',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officiis expedita incidunt culpa laboriosam eligendi rerum iste! Similique fugiat non assumenda itaque accusamus molestiae est explicabo, harum quisquam modi animi?',
    //         image: TeacherImg3,
    //     },
    //     {
    //         name: 'Rasim Rəhimov',
    //         subject: 'Coğrafiya',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officiis expedita incidunt culpa laboriosam eligendi rerum iste! Similique fugiat non assumenda itaque accusamus molestiae est explicabo, harum quisquam modi animi?',
    //         image: TeacherImg,
    //     },
    //     {
    //         name: 'Rasim Rəhimov1',
    //         subject: 'Coğrafiya',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officiis expedita incidunt culpa laboriosam eligendi rerum iste! Similique fugiat non assumenda itaque accusamus molestiae est explicabo, harum quisquam modi animi?',
    //         image: TeacherImg1,
    //     },
    //     {
    //         name: 'Rasim Rəhimov2',
    //         subject: 'Coğrafiya',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officiis expedita incidunt culpa laboriosam eligendi rerum iste! Similique fugiat non assumenda itaque accusamus molestiae est explicabo, harum quisquam modi animi?',
    //         image: TeacherImg2,
    //     },
    //     {
    //         name: 'Rasim Rəhimov3',
    //         subject: 'Coğrafiya',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officiis expedita incidunt culpa laboriosam eligendi rerum iste! Similique fugiat non assumenda itaque accusamus molestiae est explicabo, harum quisquam modi animi?',
    //         image: TeacherImg3,
    //     },

    // ];


    return (
        <div className='teachers_container'>
            <div className="teachers_next_prev_btns">
                <div className="teachers_prev_btn">
                    <IoIosArrowBack className='teachers_prev_btn_icon' />
                </div>
                <div className="teachers_next_btn">
                    <IoIosArrowForward className='teachers_next_btn_icon' />
                </div>
            </div>
            <Swiper
                slidesPerView={4}
                grabCursor={true}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                      //   spaceBetween: 20,
                      },
                    576: {
                      slidesPerView: 2,
                    //   spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                    //   spaceBetween: 40,
                    },
                    992: {
                      slidesPerView: 4,
                    //   spaceBetween: 50,
                    },
                  }}
                pagination={{ clickable: true }}
                navigation={{ nextEl: '.teachers_next_btn', prevEl: '.teachers_prev_btn' }}
                modules={[Keyboard, Navigation, Controller, EffectCube]}
                className="mySwiper teachers_slider_card_container container"

            >



                {
                    teachersListArr.map((teacher, i) => {
                        return (
                            // <SwiperSlide key={i} className='teachers_slider_card'>
                            //     <img src={teacher.image} alt="" />
                            //     <h3>{teacher.name}</h3>
                            //     <span>{teacher.subject}</span>
                            //     <p>{teacher.description}</p>
                            // </SwiperSlide>
                            <SwiperSlide key={i}>

                                <div className="teachers_slider_card">
                                    <img src={teacher.image} alt="" />
                                    <h3>{teacher.name + ' '+ teacher.surname}</h3>
                                    {/* <p>{teacher.about}</p> */}

                                    <FaQuoteLeft className="quote-icon" />
                                    <div className="details">
                                        <span>cografia</span>

                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }






            </Swiper>


        </div>
    )
}

export default TeachersContainer