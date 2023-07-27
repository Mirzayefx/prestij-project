import React from 'react'
import OtherAboutContainer from '../components/OtherAboutContainer'
import FooterHeader from '../components/FooterHeader'
import FooterSecond from '../components/FooterSecond'
import FooterEndBg from '../components/FooterEndBg'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'

const AboutPage = ({otherPageBanner}) => {
  return (
    <div>
      <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="Haqqımızda" otherHeaderPagesLink="HAQQIMIZDA"/>
      <main>
        <section>
          <OtherAboutContainer/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default AboutPage