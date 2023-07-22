import React from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherServiceContainer from '../components/OtherServiceContainer'

const ServicePage = () => {
    return (
        <div>
            <OtherHeader otherHeaderMainContent="Xidmətlərimiz" otherHeaderPagesLink="XİDMƏTLƏRİMİZ" />
            <main>
                <section>
                    <OtherServiceContainer />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default ServicePage