import React from 'react'

const OtherContactForm = () => {
  return (
    <div className='other_contact_form'>
        <form>
            <div className='other_contact_form_card'>
                <input type="text" placeholder='Ad'/>
            </div>
            <div className='other_contact_form_card'>
                <input type="email" placeholder='Email'/>
            </div>
            <div className='other_contact_form_card'>
                <input type="text" placeholder='Mövzu'/>
            </div>
            <div className='other_contact_form_card'>
                <textarea placeholder='Mesaj' cols="30" rows="10"></textarea>
            </div>
            <button><span>Göndər</span></button>
        </form>
    </div>
  )
}

export default OtherContactForm