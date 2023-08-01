import React from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherAboutContainer from '../components/OtherAboutContainer'
import OtherContactContainer from '../components/OtherContactContainer'
import OtherContactMaps from '../components/OtherContactMaps'
import { Helmet } from 'react-helmet'

const ContactPage = ({otherPageBanner}) => {
    return (
        <div>
            <Helmet>
                <title>Əlaqə</title>
            </Helmet>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="Əlaqə" otherHeaderPagesLink="ƏLAQƏ" />
            <main>
                <section className='contact_section'>
                    {/* <div className="other_bg_shadow"> */}
                        <OtherContactContainer/>
                    {/* </div> */}
                   
                    
                </section>
                <OtherContactMaps/>
            </main>
            <Footer />
        </div>
    )
}

export default ContactPage