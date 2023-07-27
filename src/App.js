import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from './pages/Home'
import AboutPage from './pages/AboutPage';
import LuckPage from './pages/LuckPage';
import ServicePage from './pages/ServicePage';
import NewsPage from './pages/NewsPage';
import FotoPage from './pages/FotoPage';
import VideoPage from './pages/VideoPage';
import PublicationPage from './pages/PublicationPage';
import ContactPage from './pages/ContactPage';
import CVSendPage from './pages/CVSendPage';
import DetailNewsPage from './pages/DetailNewsPage';
import DetailServicePage from './pages/DetailServicePage';
import { useDispatch, useSelector } from 'react-redux';
import { getSettingsList } from './actions/MainAction';


const App = () => {
  const dispatch=useDispatch()
  const settingsListArr=useSelector(state=>state.Data.settingsListArr)

  useEffect(()=>{
    dispatch(getSettingsList())
  },[dispatch])

  console.log(settingsListArr);

  return (
    
      <Routes>
        <Route path='/prestij-project' element={<Home />} />
        <Route path='/haqqimizda' element={<AboutPage otherPageBanner={settingsListArr[0]?.about_page_banner} />} />
        <Route path='/ugurlarimiz' element={<LuckPage otherPageBanner={settingsListArr[0]?.success_page_banner}/>} />
        <Route path='/xidmetlerimiz' element={<ServicePage otherPageBanner={settingsListArr[0]?.service_page_banner}/>} />
        <Route path='/xidmetlerimiz/:title/:id' element={<DetailServicePage otherPageBanner={settingsListArr[0]?.service_page_banner}/>} />
        <Route path='/xeberler' element={<NewsPage otherPageBanner={settingsListArr[0]?.about_page_banner}/>} />
        <Route path='/xeberler/:title/:id' element={<DetailNewsPage otherPageBanner={settingsListArr[0]?.about_page_banner}/>} />
        <Route path='/foto' element={<FotoPage otherPageBanner={settingsListArr[0]?.gallery_page_banner}/>} />
        <Route path='/video' element={<VideoPage otherPageBanner={settingsListArr[0]?.gallery_page_banner}/>} />
        <Route path='/nesrlerimiz' element={<PublicationPage otherPageBanner={settingsListArr[0]?.about_page_banner}/>} />
        <Route path='/elaqe' element={<ContactPage otherPageBanner={settingsListArr[0]?.contact_page_banner}/>} />
        <Route path='/cv-gonder' element={<CVSendPage otherPageBanner={settingsListArr[0]?.resume_page_banner}/>} />
      </Routes>
    
  )
}

export default App