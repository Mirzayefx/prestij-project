import React from 'react'
import Footer from '../components/Footer'
import OtherHeader from '../components/OtherHeader'
import OtherLuckContainer from '../components/OtherLuckContainer'
import OtherNewsContainer from '../components/OtherNewsContainer'

const NewsPage = ({otherPageBanner}) => {
    return (
        <div>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="Xəbərlər" otherHeaderPagesLink="XƏBƏRLƏR" />
            <main>
                <section>
                    <OtherNewsContainer/>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default NewsPage