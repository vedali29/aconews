import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NewsDetailsPage from './Pages/NewsDetailsPage';
import Navbar from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';
import DisplayCards from './Elements/DisplayCards';
import BreakingNewsTicket from './Elements/BrakingNewsTicket';
import NewsPaperSection from './Elements/NewsPaperSection';
import Base from './Elements/Base';
import UpperSection from './Elements/UpperSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BottomCard from './Elements/BottomCard';
import Gallery from './Components/Gallery';
import NewsGrid from './Components/NewsGrid';
import VideoCard from './Elements/VideoCard';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const newsText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit recusandae doloribus earum, necessitatibus sint sapiente porro? Debitis quis voluptatibus asperiores cupiditate ab iste animi provident, atque assumenda nemo doloribus itaque suscipit quisquam vero rerum laudantium officia quia quas nisi.";

  return (
    <Router>
      <div className="max-h-screen bg-white text-gray-900">
        <NewsPaperSection data-aos="zoom-in" />
        <Navbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/:id" element={<NewsDetailsPage />} />
          <Route path="/search" element={<HomePage />} />
        </Routes>
        <Gallery/>
        <BreakingNewsTicket news={newsText} data-aos="fade-up" />
        <Base data-aos="zoom-in-up"/>
        <DisplayCards data-aos="fade-up" />
        <UpperSection data-aos="zoom-in" />
        {/* <Gallery/> */}
        <NewsGrid/>
        <VideoCard/>
        <BottomCard/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
