import React from 'react';
import './AsideHome.css';
import { Button } from 'react-bootstrap';
import android from '../../assets/img/android.png';
import AnnouncementCarousel from './AnnouncementCarousel';
import { appUrl } from './Config';

const AsideHome = () => {

  const handleDownload = () => {
    const githubRawURL = {appUrl};
    const a = document.createElement('a');
    a.href = githubRawURL;
    a.download = 'bet-ninja.apk'; // Specify the filename
    a.click();
  };

  return (
    <div className='aside-home'>
      <AnnouncementCarousel />
      <br/> <br/>
      <h1>
        PLAY AND EARN MONEY WITH <br /> <span> BET NINJA!</span>
      </h1>
      <br/>
      <h3>
        INDIA'S MOST TRUSTED GAMING AND WINNING PROGRAM
        ONLINE MONEY EARNING GAME
      </h3>

      <Button variant='outline-success' onClick={() => handleDownload()} > <img src={android} alt='an' style={{ width: "30px", boxSizing: "border-box", margin: "0px" }} /> DOWNLOAD BET NINJA</Button>
    </div>
  );
};

export default AsideHome;