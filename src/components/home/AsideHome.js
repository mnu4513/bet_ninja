import React from 'react';
import './AsideHome.css';
import { Button } from 'react-bootstrap';
import android from '../../assets/img/android.png';

const AsideHome = () => {

    const handleDownload = () => {
      const githubRawURL = 'https://github.com/mnu4513/text_utils/raw/app/code_sbs/app-release.apk';
      const a = document.createElement('a');
      a.href = githubRawURL;
      a.download = 'your-app.zip'; // Specify the filename
      a.click();
    };

  return (
    <div className='aside-home'>
        <h1>
            PLAY AND ERAN MONEY WITH <br/> <span> BET NINJA!</span>
        </h1>
        <h3>
            INDIA'S MOST TRUSTED GAMING AND WINNIG PROGRAM 
            ONLINE MONEY EARNING GAME
        </h3>

        <Button variant='outline-success' onClick={() => handleDownload()} > <img src={android} alt='an' style={{width: "30px", boxSizing: "border-box", margin: "0px"}} /> DOWNLOAD BET NINJA</Button>
    </div>
  );
};

export default AsideHome;