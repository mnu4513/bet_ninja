// AnnouncementCarousel.js
import React, { useState, useEffect } from 'react';
import './AnnouncementCarousel.css'; // Import your custom CSS file for styling

const announcements = [
  "Minors are not allowed to participate in the game.",
  "Hello Withdrawls typically take 1-2 hours to process.",
  " Must tide the correct bank or e-wallet details."
 ];

const AnnouncementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up interval for auto-scrolling
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 3000); // Change the interval time (in milliseconds) as needed

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="announcement-carousel text-danger">

      <div className="announcement-text">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'active' : ''}
          >
            {announcement}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementCarousel;
