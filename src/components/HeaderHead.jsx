import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImMobile } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { PiPhoneLight } from "react-icons/pi"
import { useDispatch, useSelector } from 'react-redux';
import { getContactInfoList } from '../actions/MainAction';





const HeaderHead = () => {
    const dispatch = useDispatch();
    const contactInfoArr = useSelector(state => state.Data.contactInfoArr)

    useEffect(() => {
        dispatch(getContactInfoList())
    }, [dispatch])

    console.log(contactInfoArr);
    return (
        <div className='header_head_container_bg'>
            <div className="header_head_container container">
                {/* {
                    contactInfoArr.map((data, i) => { */}
                        <ul className='header_first_list'>
                            <li>
                                <GoMail className='header_first_list_icon'/>
                                <Link to={contactInfoArr.length && contactInfoArr[0]?.email}>{contactInfoArr[0]?.email}</Link>
                            </li>
                            <li>
                                <ImMobile className='header_first_list_icon'/>
                                <Link to={contactInfoArr.length && contactInfoArr[0]?.contact_number}>{contactInfoArr[0]?.contact_number}</Link>
                            </li>
                            {/* <li>
                            <PiPhoneLight />
                            <Link to={''}>(012) 409-02-74</Link>
                        </li> */}
                        </ul>
                    {/* })
                } */}

                <ul className='header_second_list'>
                    <li>
                        <Link to={''}><BsFacebook className='header_first_list_icon'/></Link>
                    </li>
                    <li>
                        <Link to={''}><BsInstagram className='header_first_list_icon'/></Link>
                    </li>
                    <li>
                        <Link to={''}><FaLinkedinIn className='header_first_list_icon'/></Link>
                    </li>
                    <li>
                        <Link to={''}><BsYoutube className='header_first_list_icon'/></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderHead