
import {listOfWinners} from '../home/Config';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselPage.css'; // Import your custom CSS file for styling
import WinnerCard from './WinnerCard'; // Assuming you have a WinnerCard component
// import AnnouncementCarousel from './AnnouncementCarousel';

const CarouselPage = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set the auto-scroll speed (in milliseconds)
  };

 

  return (
    <div className="carousel-container">
      {/* <AnnouncementCarousel/> */}
      <h1>Top Winners</h1>
      <Slider {...settings}>
        {listOfWinners.map((x) => (
          <div key={x.name} className="carousel-item">
            <WinnerCard {...x} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselPage;

