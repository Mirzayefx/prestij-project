import React, { useEffect } from 'react'
import ServicesImg from '../images/headerSecondImg.jpeg'
import { BsLink45Deg } from "react-icons/bs";
import TestImg from '../images/1.jpeg'
import TestImg1 from '../images/2.jpeg'
import TestImg2 from '../images/3.jpeg'
import TestImg3 from '../images/5.jpeg'
import TestImg4 from '../images/8.jpeg'
import TestImg5 from '../images/9.jpeg'
import { useDispatch, useSelector } from 'react-redux';
import { getServicesList } from '../actions/MainAction';
import ServicesCard from './ServicesCard';


const ServicesContainer = () => {

    const dispatch=useDispatch()
    const servicesListArr=useSelector(state=>state.Data.servicesListArr)
    useEffect(()=>{
        dispatch(getServicesList())
    },[dispatch])

    console.log(servicesListArr);
    return (
        <div className='services_container cards container'>
            {/* <div className='services_card'>
                <img src={TestImg} alt="" />
                <h3> Abituriyent hazırlığı</h3>
            </div> */}
            {
                servicesListArr.map((data,i)=>{
                    return <ServicesCard key={i} data={data}/>
                })
            }
            
            {/* <div class="card">

                <article>
                    <h2>Magistr hazırlığı</h2>

                    <div class="pic"><img src={TestImg1} /></div>

                    <div class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus optio dolores accusamus.</div>

                </article>

            </div>
            <div class="card">

                <article>
                    <h2>Xarici dil kursları</h2>

                    <div class="pic"><img src={TestImg2} /></div>

                    <div class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus optio dolores accusamus.</div>

                </article>

            </div>
            <div class="card">

                <article>
                    <h2>Məktəbəqədər hazırlıq</h2>

                    <div class="pic"><img src={TestImg3} /></div>

                    <div class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus optio dolores accusamus.</div>

                </article>

            </div>
            <div class="card">

                <article>
                    <h2>İbtidai hazırlıq</h2>

                    <div class="pic"><img src={TestImg4} /></div>

                    <div class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus optio dolores accusamus.</div>

                </article>

            </div>
            <div class="card">

                <article>
                    <h2>Liseylərə hazırlıq</h2>

                    <div class="pic"><img src={TestImg5} /></div>

                    <div class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus optio dolores accusamus.</div>

                </article>

            </div>
            <div class="card">

                <article>
                    <h2>Mühasibat uçotu</h2>

                    <div class="pic"><img src={TestImg1} /></div>

                    <div class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus optio dolores accusamus.</div>

                </article>

            </div>
            <div class="card">

                <article>
                    <h2>Kompüter kursları</h2>

                    <div class="pic"><img src={TestImg2} /></div>

                    <div class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus optio dolores accusamus.</div>

                </article>

            </div> */}

        </div>
    )
}

export default ServicesContainer