import React from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherAboutContainer from '../components/OtherAboutContainer'
import OtherPublicationContainer from '../components/OtherPublicationContainer'

const PublicationPage = () => {
    return (
        <div>
            <OtherHeader otherHeaderMainContent="Nəşrlərimiz" otherHeaderPagesLink="NƏŞRLƏRİMİZ" />
            <main>
                <section>
                    <OtherPublicationContainer />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default PublicationPage