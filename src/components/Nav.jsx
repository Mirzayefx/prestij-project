import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai"


const Nav = () => {
    return (
        <nav>
            <ul className="nav_list">
                <li>
                    <Link to=''>Haqqımızda</Link>
                </li>
                <li>
                    <Link to=''>Uğurlarımız</Link>
                </li>
                <li>
                    <Link to=''>XİDMƏTLƏRİMİZ</Link>
                </li>
                <li>
                    <Link to=''>Xəbərlər</Link>
                </li>
                <li>
                    <Link to=''>Qalareya</Link>
                </li>
                <li>
                    <Link to=''>Cv göndər</Link>
                </li>
                <li>
                    <Link to=''>İmtahanlar</Link>
                </li>

                <li>
                    <Link to=''>NƏŞRLƏRİMİZ</Link>
                </li>
                <li>
                    <Link to=''>Əlaqə</Link>
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