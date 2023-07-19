import React from 'react'
import HeaderHead from '../components/HeaderHead'
import HeaderSecond from '../components/HeaderSecond'
import HeaderNav from '../components/HeaderNav'
import HeaderSlider from '../components/HeaderSlider'
import SectionHeader from '../components/SectionHeader'
import VideoContainer from '../components/VideoContainer'
import News from '../components/News'
import ServicesHeaderImg from '../components/ServicesHeaderImg'
import Services from '../components/Services'
import About from '../components/About'
import Teachers from '../components/Teachers'
import FooterHeader from '../components/FooterHeader'
import FooterSecond from '../components/FooterSecond'
import FooterEndBg from '../components/FooterEndBg'
import NewLetter from '../components/NewLetter'

const Home = () => {
  return (
    <div>
      <header>
        <HeaderHead />
        <HeaderSecond />
        <HeaderNav />
        <HeaderSlider />
      </header>
      <main>
        
        <section>
          <SectionHeader sectionHeader="Xəbərlər" sectionLink="Kursumuz haqqında ən son yenilikləri xəbərlər bölməsindən izləyin!"/>
          <News />
        </section>
        <section className='services_section'>
          <ServicesHeaderImg />
          <SectionHeader sectionHeader="Xidmətlərimiz" sectionLink="Bizim kursumuz sizə aşağıdakı xidmətləri yüksək səviyyədə göstərir!"/>
          <Services />
        </section>
        <section>
          <SectionHeader sectionHeader="Videoqalereya" sectionLink="Bütün videolara baxmaq üçün bura daxil olun »"/>
          <VideoContainer/>
        </section>
        <section>
          <SectionHeader sectionHeader="Haqqımızda" sectionLink="Bizim kursumuz sizə aşağıdakı xidmətləri yüksək səviyyədə göstərir!"/>
          <About />
        </section>
        <section className='teachers_section'>
          <SectionHeader sectionHeader="Müəllimlərimiz" sectionLink="Kursumuzda dərs deyən yüksək səviyyəli müəllimlərimiz!"/>
          <Teachers />
        </section>
        {/* <section className='partners_section'>
          <div className="partners_section_bg_shadow">
            <SectionHeader sectionHeader="Bizim partnyorlar" sectionLink="Our working professional partners listed below with parallax background style!"/>
          </div>

        </section> */}
        <section>
          <NewLetter/>
        </section>
      </main>
      <footer>
          <FooterHeader/>
          <FooterSecond/>
          <FooterEndBg/>
      </footer>
    </div>
  )
}

export default Home