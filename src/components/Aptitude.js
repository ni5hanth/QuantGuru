import React, { useState, useEffect } from 'react';
import './LearningModule.css'; 
import image1 from './icons/image1.png';
import image2 from './icons/image2.png';
import image3 from './icons/image3.png';
import image4 from './icons/image4.png';
import image5 from './icons/image5.png';

function Aptitude() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [visibleItems, setVisibleItems] = useState([]);

  const contentItems = [
    { image: image1, title: 'Multiplication of Numbers: Shortcut', video: 'https://www.youtube.com/watch?v=2ji5sNRpyvA&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=1&ab_channel=QuantGuru' },
    { image: image2, title: 'Square of Numbers ending with 5', video: 'https://www.youtube.com/watch?v=5vNH-yE3MUI&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=2&ab_channel=QuantGuru' },
    { image: image3, title: 'Beautiful Maths Sum', video: 'https://www.youtube.com/watch?v=l_3D_L3zdSM&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=3&ab_channel=QuantGuru' },
    { image: image4, title: 'Square of Number ending with 5', video: 'https://www.youtube.com/watch?v=_-ZWwgddrTA&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=4&ab_channel=QuantGuru' },
    { image: image5, title: 'Square of Number: Speed Maths', video: 'https://www.youtube.com/watch?v=e8JzJ_OX4hw&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=5&ab_channel=QuantGuru' },
    { image: image1, title: 'Multiplication of Numbers: Shortcut', video: 'https://www.youtube.com/watch?v=2ji5sNRpyvA&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=1&ab_channel=QuantGuru' },
    { image: image2, title: 'Square of Numbers ending with 5', video: 'https://www.youtube.com/watch?v=5vNH-yE3MUI&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=2&ab_channel=QuantGuru' },
    { image: image3, title: 'Beautiful Maths Sum', video: 'https://www.youtube.com/watch?v=l_3D_L3zdSM&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=3&ab_channel=QuantGuru' },
    { image: image4, title: 'Square of Number ending with 5', video: 'https://www.youtube.com/watch?v=_-ZWwgddrTA&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=4&ab_channel=QuantGuru' },
    { image: image5, title: 'Square of Number: Speed Maths', video: 'https://www.youtube.com/watch?v=e8JzJ_OX4hw&list=PLyV06iJG9PI-4LHv1gjAxC6_I5Ml4xsSs&index=5&ab_channel=QuantGuru' },
    // ... (repeat the items to match your original 10 items)
    // ... (repeat the items to match your original 10 items)
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, Number(entry.target.dataset.index)]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.content-block').forEach((block) => {
      observer.observe(block);
    });

    return () => observer.disconnect();
  }, []);

  const playVideo = (url) => {
    const videoId = url.split('v=')[1].split('&')[0];
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    setVideoUrl(embedUrl);
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
    setVideoUrl('');
  };

  return (
    <div className="learning-module arithmetic-problems">
      <div className='header-block animate-fade-in'>
        <div className='text-container'>
          <h1 className="animate-slide-down">Quantitative Aptitude</h1>
          <p className="animate-slide-up">"Empower Your Numerical Mastery: Unleashing Potential Through Quantitative Aptitude."</p>
        </div>
        <div className='image-container animate-scale-in'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqKTzIe4DyQOWlUxNAHyywYysWgrNh2ssHA&s'
            alt='Quantitative Aptitude'
          />
        </div>
      </div>
      <div className="content-container">
        {contentItems.map((item, index) => (
          <div 
            className={`content-block ${visibleItems.includes(index) ? 'animate-fade-in' : ''}`} 
            key={index}
            data-index={index}
          >
            <div className='content-image'>
              <img
                src={item.image}
                alt={item.title}
                onClick={() => playVideo(item.video)}
              />
            </div>
            <div className='content-text'>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {showVideo && (
        <div className="video-popup animate-fade-in">
          <div className="video-popup-content animate-scale-in">
            <span className="close" onClick={closeVideo}>&times;</span>
            <iframe
              width="560"
              height="315"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Aptitude;