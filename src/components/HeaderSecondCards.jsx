import React from 'react'
import { TfiPencilAlt } from "react-icons/tfi";
import { LuClipboardSignature } from "react-icons/lu";
import { LiaTicketAltSolid } from "react-icons/lia";
import OnlineExamIcon from '../images/online-course.png'
import OnlineTicketIcon from '../images/ticket.png'
import OnlineSignUpIcon from '../images/inscription.png'
import OnlineExamResultIcon from '../images/checklist.png'

const HeaderSecondCards = () => {
    return (
        <ul className='header_second_cards_container'>
            <li className="header_second_card">
                <div>
                    <img src={OnlineExamResultIcon} alt="" />
                    {/* <TfiPencilAlt className='header_second_card_icon' /> */}
                </div>
                <p>İmtahan nəticələri</p>
            </li>
            <li className="header_second_card">
                <div>
                    <img src={OnlineSignUpIcon} alt="" />
                    {/* <LuClipboardSignature className='header_second_card_icon' /> */}
                </div>
                <p>Kursa online qeydiyyat</p>
            </li>
            <li className="header_second_card">
                <div>
                    <img src={OnlineTicketIcon} alt="" />
                    {/* <LiaTicketAltSolid className='header_second_card_icon' /> */}
                </div>
                <p>Online bilet satışı</p>
            </li>
            <li className="header_second_card">
                <div>
                    <img src={OnlineExamIcon} alt="" />
                    {/* <TfiPencilAlt className='header_second_card_icon' /> */}
                </div>
                <p>Online sınaq imtahanı</p>
            </li>
        </ul>
    )
}

export default HeaderSecondCards