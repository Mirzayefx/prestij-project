import React from 'react'
import { Link } from 'react-router-dom'
import { ImMobile } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { PiPhoneLight } from "react-icons/pi"


const HeaderHead = () => {
    return (
        <div className='header_head_container_bg'>
            <div className="header_head_container container">
                <ul className='header_first_list'>
                    <li>
                        <GoMail />
                        <Link to={''}>info@prestij-s.com</Link>
                    </li>
                    <li>
                        <ImMobile />
                        <Link to={''}>(055) 681-96-61</Link>
                    </li>
                    {/* <li>
                        <PiPhoneLight />
                        <Link to={''}>(012) 409-02-74</Link>
                    </li> */}
                </ul>
                <ul className='header_second_list'>
                    <li>
                        <Link to={''}><BsFacebook /></Link>
                    </li>
                    <li>
                        <Link to={''}><BsInstagram /></Link>
                    </li>
                    <li>
                        <Link to={''}><FaLinkedinIn /></Link>
                    </li>
                    <li>
                        <Link to={''}><BsYoutube /></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderHead