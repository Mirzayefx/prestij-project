import React from 'react'
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


const App = () => {
  

  return (
    
      <Routes>
        <Route path='/prestij-project' element={<Home />} />
        <Route path='/haqqimizda' element={<AboutPage />} />
        <Route path='/ugurlarimiz' element={<LuckPage />} />
        <Route path='/xidmetlerimiz' element={<ServicePage />} />
        <Route path='/xeberler' element={<NewsPage />} />
        <Route path='/xeberler/:title/:id' element={<DetailNewsPage />} />
        <Route path='/foto' element={<FotoPage />} />
        <Route path='/video' element={<VideoPage />} />
        <Route path='/nesrlerimiz' element={<PublicationPage />} />
        <Route path='/elaqe' element={<ContactPage />} />
        <Route path='/cv-gonder' element={<CVSendPage />} />
      </Routes>
    
  )
}

export default App