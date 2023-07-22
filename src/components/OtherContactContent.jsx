import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsLink45Deg, BsYoutube } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { FaLinkedinIn } from 'react-icons/fa'
import { PiPhoneLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import OtherContactContentImg from '../images/3-Tips-to-Find-a-Recruiters-Contact-Info-1024x512.jpeg'

const OtherContactContent = () => {
    return (
        <div className="other_contact_content">
            <p>If you need help before, during or after your purchase, this is the place to be. Please use below contact details for all your pre-sale questions, contact questions.</p>
            <div className="footer_second_card">
                <div className="footer_second_card_content">
                    <BsLink45Deg className="footer_second_card_link" />
                    <Link to=''>https://prestij-s.com/</Link>
                </div>
                <div className="footer_second_card_content">
                    <CiMail className="footer_second_card_link" />
                    <Link to=''> info@prestij-s.com</Link>
                </div>
                <div className="footer_second_card_content">
                    <PiPhoneLight className="footer_second_card_link" />
                    <Link to=''>  (055) 681-96-61</Link>
                </div>
                <div className="footer_second_card_content">
                    <AiOutlineHome className="footer_second_card_link" />
                    <Link to=''>Zahid Xəlilov 41</Link>
                </div>

            </div>
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
            {/* <img src={OtherContactContentImg} alt="" /> */}
        </div>
    )
}

export default OtherContactContent