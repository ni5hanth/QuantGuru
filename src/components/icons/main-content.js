import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import TopicsBar from './TopicsBar';
import Advertisement from './Advertisement';
import Announcement from './Announcement';
import VideoSlideshow from './VideoSlideshow';
import Footer from './Footer';
import './MainContent.css'; // Make sure this CSS file exists and is imported

const MainContent = () => {
  return (
    <div className="main-content-container">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-area">
          <TopicsBar />
          <div className="content-area">
            <Advertisement />
            <Announcement />
            <VideoSlideshow />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainContent;