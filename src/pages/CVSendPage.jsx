import React from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherCVSendContainer from '../components/OtherCVSendContainer'

const CVSendPage = ({otherPageBanner}) => {
    return (
        <div>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="CV Göndər" otherHeaderPagesLink="CV GÖNDƏR" />
            <main>
                <section>
                    <OtherCVSendContainer />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default CVSendPage