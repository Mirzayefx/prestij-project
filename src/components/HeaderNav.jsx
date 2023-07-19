import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai"

const HeaderNav = () => {
    return (
        <div className='header_nav_bg'>
            <nav className='container'>
                <ul className="nav_list">
                    <li>
                        <Link to=''>Haqqımızda</Link>
                    </li>
                    <li>
                        <Link to=''>Uğurlarımız</Link>
                    </li>
                    <li>
                        <Link to=''>Xidmətlərimiz</Link>
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
                        <Link to=''>Video izahlar</Link>
                    </li>
                    <li>
                        <Link to=''>Əlaqə</Link>
                    </li>
                    <li>
                        <Link to=''>Nəşrlərimiz</Link>
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
        </div>
    )
}

export default HeaderNav