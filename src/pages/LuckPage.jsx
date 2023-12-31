import React from 'react'
import HeaderHead from '../components/HeaderHead'
import OtherHeaderMainContainer from '../components/OtherHeaderMainContainer'
import OtherHeaderPagesLink from '../components/OtherHeaderPagesLink'
import OtherAboutContainer from '../components/OtherAboutContainer'
import FooterHeader from '../components/FooterHeader'
import FooterSecond from '../components/FooterSecond'
import FooterEndBg from '../components/FooterEndBg'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherLuckContainer from '../components/OtherLuckContainer'
import { Helmet } from 'react-helmet'

const LuckPage = ({otherPageBanner}) => {
    return (
        <div>
            <Helmet>
                <title>Uğurlarımız</title>
            </Helmet>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="Uğurlarımız" otherHeaderPagesLink="UĞURLARIMIZ"/>
            <main>
                <section>
                    <OtherLuckContainer />
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default LuckPage