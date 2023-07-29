import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai"
import { FaBars } from "react-icons/fa"
import { CgClose } from "react-icons/cg"
import { GoTriangleDown } from "react-icons/go"

const Nav = () => {
    useEffect(()=>{
        let angleIcon=document.querySelectorAll('.angle_icon')
        let navInnerListUl=document.querySelectorAll('.nav_inner_list>ul')
        console.log(navInnerListUl);
        for(let i=0;i<angleIcon.length;i++){
            angleIcon[i].addEventListener('click',()=>{
                navInnerListUl[i].classList.toggle('active_inner_list')
            })
        }

        let barsIcon=document.querySelector('.bars_icon')
        let closeIcon=document.querySelector('.close_icon')
        let navList=document.querySelector('.nav_list')
        barsIcon.addEventListener('click',()=>{
            navList.classList.add('nav_active')
        })
        closeIcon.addEventListener('click',()=>{
            navList.classList.remove('nav_active')
        })
       
    },[])
    return (
        <nav>
            <ul className="nav_list">
                <div className="close_parent">
                    <CgClose className='close_icon' />
                </div>

                <li className='nav_inner_list'>
                    <Link to='/haqqimizda'>Haqqımızda</Link>
                </li>
                <li className='nav_inner_list'>
                    <Link to='/ugurlarimiz'>Uğurlarımız</Link>
                </li>
                <li className='nav_inner_list'>
                    <Link className='angle_link' to='/xidmetlerimiz'>XİDMƏTLƏRİMİZ <GoTriangleDown className='angle_icon'/></Link>
                    <ul>
                        <li>
                            <Link to=''>ABİTURİYENT HAZIRLIĞI</Link>
                        </li>
                        <li>
                            <Link to=''>MAGİSTR HAZIRLIĞI</Link>
                        </li>
                        <li>
                            <Link to=''>XARİCİ DİL KURSLARI</Link>
                        </li>
                        <li>
                            <Link to=''>MƏKTƏBƏQƏDƏR HAZIRLIQ</Link>
                        </li>
                        <li>
                            <Link to=''>İBTİDAİ HAZIRLIQ</Link>
                        </li>
                        <li>
                            <Link to=''>LİSEYLƏRƏ HAZIRLIQ</Link>
                        </li>
                        <li>
                            <Link to=''>MÜHASİBAT UÇOTU</Link>
                        </li>
                        <li>
                            <Link to=''>KOMPUTER KURSLARI</Link>
                        </li>
                        <li>
                            <Link to=''>SÜRÜCÜLÜK KURSLARI</Link>
                        </li>
                        <li>
                            <Link to=''>DÖVLƏT QULLUĞUNA HAZIRLIQ</Link>
                        </li>
                        <li>
                            <Link to=''>MÜƏLLİMLƏRİN İŞƏ QƏBULU ÜZRƏ HAZIRLIQ</Link>
                        </li>
                    </ul>
                </li>
                <li className='nav_inner_list'>
                    <Link to='/xeberler'>Xəbərlər</Link>
                </li>
                <li className='nav_inner_list galarey_list'>
                    <Link className='angle_link' to='/foto'>Qalareya <GoTriangleDown className='angle_icon'/></Link>
                    <ul>
                        <li>
                            <Link to='/foto'>FOTO</Link>
                        </li>
                        <li>
                            <Link to='/video'>VİDEO</Link>
                        </li>
                    </ul>
                </li>
                <li className='nav_inner_list'>
                    <Link to='/cv-gonder'>Cv göndər</Link>
                </li>
                <li className='nav_inner_list'>
                    <Link to=''>İmtahanlar</Link>
                </li>

                <li className='nav_inner_list'>
                    <Link to='/nesrlerimiz'>NƏŞRLƏRİMİZ</Link>
                </li>
                <li className='nav_inner_list'>
                    <Link to='/elaqe'>Əlaqə</Link>
                </li>



            </ul>
            <FaBars className="bars_icon" />
            <button className='nav_search_btn'>
                <AiOutlineSearch className='search_icon search_one_icon' />
                <div className="header_search_container">
                    <input placeholder='Axtarış sözünü bura daxil edin' type="text" />
                    <button>
                        <AiOutlineSearch className='search_icon' />
                    </button>

                </div>
            </button>

        </nav>
    )
}

export default Nav