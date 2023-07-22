import React from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherAboutContainer from '../components/OtherAboutContainer'

const PublicationPage = () => {
    return (
        <div>
            <OtherHeader otherHeaderMainContent="Nəşrlərimiz" otherHeaderPagesLink="NƏŞRLƏRİMİZ" />
            <main>
                <section>
                    <OtherAboutContainer />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default PublicationPage