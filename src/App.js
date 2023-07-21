import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import AboutPage from './pages/AboutPage';
import LuckPage from './pages/LuckPage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/prestij-project' element={<Home />} />
        <Route path='/haqqimizda' element={<AboutPage />} />
        <Route path='/ugurlarimiz' element={<LuckPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App