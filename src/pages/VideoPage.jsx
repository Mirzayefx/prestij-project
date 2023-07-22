import React from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherVideoContainer from '../components/OtherVideoContainer'

const VideoPage = () => {
    return (
        <div>
            <OtherHeader otherHeaderMainContent="Video" otherHeaderPagesLink="VİDEO" />
            <main>
                <section>
                    <OtherVideoContainer />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default VideoPage