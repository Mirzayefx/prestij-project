import React from 'react'
// import { TfiPencilAlt } from "react-icons/tfi";
// import { LuClipboardSignature } from "react-icons/lu";
// import { LiaTicketAltSolid } from "react-icons/lia";
import OnlineExamIcon from '../images/online-course (1).png'
import OnlineTicketIcon from '../images/ticket.png'
import OnlineSignUpIcon from '../images/registered (1).png'
import OnlineExamResultIcon from '../images/checklist (4).png'
import OnlineServiceIcon from '../images/technical-support (1).png'

const HeaderSecondCards = () => {
    return (
        <ul className='header_second_cards_container container'>
            <li className="header_second_card">
                <div>
                    <img src={OnlineExamResultIcon} alt="" />
                    {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" >
                        <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                        <g><g><g><path fill="#EAAE0D" d="M37.1,128v118l62,0h61.9l28.9-30.2l28.9-30.2V97.7V10H128H37.1V128z M215.5,98.1l0.1,84.6H187h-28.5l-0.1,29.8l-0.1,29.9H99.5H40.7l-0.1-114c0-62.7,0-114.2,0.1-114.6c0.1-0.5,17.9-0.6,87.4-0.5l87.2,0.1L215.5,98.1z M210.7,188.8c-1.2,1.3-12.6,13.1-25.2,26.3c-12.7,13.2-23.2,24.1-23.4,24.2c-0.2,0.1-0.4-11.7-0.4-26.3v-26.5h25.5h25.6L210.7,188.8z" /><path fill="#EAAE0D" d="M178.7,29.5c-0.1,0.2-0.1,2.4,0.1,4.9c0.2,2.5,0.3,4.6,0.2,4.7c-0.1,0.1-2.4,0.4-5,0.7l-4.9,0.5L169,42c-0.2,2.1-0.5,2,5.8,1.3c4.9-0.6,5-0.5,5,2.7c0,1.1,0.1,3,0.3,4.2c0.3,2.1,0.4,2.2,2,2.2h1.7l-0.3-4.9l-0.3-4.9l2.5-0.3c1.4-0.1,3.9-0.4,5.5-0.6l3-0.3l-0.3-1.7c-0.2-1-0.4-1.7-0.4-1.8c0,0-2.4,0.2-5.2,0.5c-2.9,0.3-5.2,0.4-5.3,0.2c-0.1-0.2-0.3-2.4-0.5-4.9l-0.3-4.6h-1.6C179.7,29,178.9,29.2,178.7,29.5z" /><path fill="#EAAE0D" d="M146.9,49.9L140,64.1l-3,0.3c-1.7,0.2-5.6,0.4-8.9,0.6l-5.9,0.3l0.1,1.7c0.1,2-0.4,1.9,9.6,1.3L138,68l-2.9,5.8c-1.6,3.1-2.9,5.9-2.9,6c0,0.3,2.9,1.8,3.1,1.6c0-0.1,1.6-3.1,3.5-6.9l3.4-6.7l3.7-0.3c2-0.2,6.2-0.4,9.2-0.6l5.5-0.3l3,8.8c1.6,4.8,3.1,9,3.3,9.4c0.5,0.8,3.6-0.2,3.3-1c-1.4-3.9-5.6-17-5.5-17.2c0.2-0.2,12.9-1.2,15.3-1.2c1.1,0,1.3-0.2,1.3-1.6c0-0.9-0.1-1.8-0.3-1.9c-0.2-0.1-4.2,0-8.9,0.4c-5.9,0.4-8.7,0.4-8.9,0.1c-0.1-0.2-2.3-6.3-4.7-13.5c-2.4-7.1-4.4-13-4.5-13C153.9,35.7,150.7,42.1,146.9,49.9z M159.2,62.7c-0.3,0.3-14.5,1.2-14.8,0.9c-0.1-0.1,1.8-4.4,4.4-9.4l4.6-9.2l3,8.8C158.1,58.5,159.3,62.6,159.2,62.7z" /><path fill="#EAAE0D" d="M68.5,95.4v1.7h60h60v-1.7v-1.7h-59.9h-60V95.4z" /><path fill="#EAAE0D" d="M68.9,118.8c-0.2,0.1-0.3,1-0.3,1.9v1.6h60h60v-1.9v-1.9h-59.6C96,118.5,69,118.6,68.9,118.8z" /><path fill="#EAAE0D" d="M68.5,145.6v1.9H99h30.5v-1.9v-1.9H99H68.5V145.6z" /><path fill="#EAAE0D" d="M81.8,161.3c-1.8,0.7-3.3,1.6-4.9,3.3c-1.7,1.8-2.7,2.4-3.6,2.4c-0.7,0-2.6,0.7-4.2,1.4c-4.6,2.3-6.8,5.9-6.8,10.9c0,1.6,0.3,3.8,0.8,4.8c0.7,1.8,0.7,2,0,3.8c-1,2.6-1,7.3,0.1,9.8c1,2.2,4.7,5.8,6.4,6.2c0.7,0.1,1.2,0.4,1.2,0.6c0,0.1-2.7,3.9-5.9,8.3c-3.3,4.4-5.9,8-5.9,8.2c0,0.1,2.6,0.2,5.7,0.2h5.7l4.2,4.9c2.8,3.3,4.3,4.7,4.4,4.2c0.1-0.4,0.8-4.9,1.7-9.8l1.5-9l3.9-0.1l3.9,0l1.6,9.7c0.9,5.3,1.7,9.7,1.9,9.7c0.1,0,2.1-2.1,4.2-4.8l4-4.8h5.9h5.9l-6.1-8.3l-6.1-8.3l2.7-1.6c5.1-3,7.3-8.8,5.4-14.4c-0.9-2.6-0.9-2.9-0.2-4.5c0.4-1,0.7-3.1,0.8-4.8c0-5.3-3.3-9.9-8.2-11.7c-1.1-0.4-2.7-0.7-3.3-0.7c-0.9,0-1.6-0.6-2.5-1.8C92.9,161.3,86.7,159.5,81.8,161.3z M91.2,165.9c1,0.8,2.2,2.2,2.7,3.2c0.9,1.7,1,1.8,3.3,1.8c6.9,0,11,6.9,7.8,13l-1.2,2.2l1.2,2.3c3.3,6-0.9,12.9-7.8,12.9c-2,0-2.6,0.2-2.8,0.8c-0.6,1.8-2.7,4-4.5,4.9c-4.1,2.1-9.8,0.2-11.6-3.8c-0.9-1.9-1-1.9-3.4-2c-4.9,0-8.4-3.1-8.9-7.9c-0.2-2,0-2.8,1.1-4.9l1.4-2.6l-1.1-1.6c-2.1-3.1-2-6.7,0.3-9.9c1.7-2.3,4-3.5,7.1-3.5c2.3,0,2.4,0,3.8-2.3c2-3.2,4.2-4.4,8-4.2C88.9,164.4,89.7,164.7,91.2,165.9z M76.9,207.3c1,1,1.7,2.3,1.7,3c0,1.4-1.8,11.9-2,12.2c-0.1,0.1-1.1-0.9-2.2-2.2l-2-2.4h-3.1c-2.5,0-3-0.1-2.9-0.7c0.3-0.8,8.4-11.7,8.7-11.7C75.1,205.6,75.9,206.4,76.9,207.3z M101.4,211.3c2.3,3.1,4.3,5.9,4.3,6.2c0,0.3-1.2,0.5-2.9,0.5h-2.9l-2.2,2.5l-2.2,2.5l-1.1-6.8l-1.1-6.8l1.9-1.9c1-1,1.9-1.9,2-1.9C97,205.6,99,208.1,101.4,211.3z" /></g></g></g>
                    </svg> */}
                </div>
                <p>İmtahan nəticələri</p>
            </li>
            <li className="header_second_card">
                <div>
                    <img src={OnlineSignUpIcon} alt="" />
                </div>
                <p>Kursa online qeydiyyat</p>
            </li>
            {/* <li className="header_second_card">
                <div>
                    <img src={OnlineTicketIcon} alt="" />
                    <img src={OnlineServiceIcon} alt="" />
                </div>
                <p>Xidmətlərimiz</p>
            </li> */}
            <li className="header_second_card">
                <div>
                    <img src={OnlineExamIcon} alt="" />


                </div>
                <p>Online sınaq imtahanı</p>
            </li>
        </ul>
    )
}

export default HeaderSecondCards