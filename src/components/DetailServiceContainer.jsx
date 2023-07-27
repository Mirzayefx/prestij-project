import DOMPurify from 'dompurify'
import React from 'react'

const DetailServiceContainer = ({serviceRetrieveObj}) => {
    return (
        <div className='container detail_news_container'>
            <div className="detail_news_card">
                <img src={serviceRetrieveObj.image} alt="" />





                <p>{DOMPurify.sanitize(serviceRetrieveObj.content).replace(/<[^>]+>/g, '')}</p>
            </div>
        </div>
    )
}

export default DetailServiceContainer