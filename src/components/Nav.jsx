import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai"


const Nav = () => {
    return (
        <nav>
            <ul className="nav_list">
                <li className='nav_inner_list'>
                    <Link to='/haqqimizda'>Haqqımızda</Link>
                </li>
                <li className='nav_inner_list'>
                    <Link to='/ugurlarimiz'>Uğurlarımız</Link>
                </li>
                <li className='nav_inner_list'>
                    <Link to='/xidmetlerimiz'>XİDMƏTLƏRİMİZ</Link>
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
                    <Link to='/foto'>Qalareya</Link>
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
                    <Link to=''>Cv göndər</Link>
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
                <button className='nav_search_btn'>
                    <AiOutlineSearch className='search_icon' />
                    <div className="header_search_container">
                        <input placeholder='Axtarış sözünü bura daxil edin' type="text" />
                        <button>
                            <AiOutlineSearch className='search_icon' />
                        </button>

                    </div>
                </button>


            </ul>

        </nav>
    )
}

export default Nav