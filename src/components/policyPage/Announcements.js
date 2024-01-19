import React from 'react';
import './Announcement.css';
import announcement from '../../assets/img/announcement.png';

const Announcements = () => {
  return (
    <div className='container'>
      <br/>
      <h1> Announcements </h1>
      <div className='container-inner'>
        <img src={announcement} alt='announcement' />
        <div>
          <h3>
            Withdrawl recieved funds time
          </h3>
          <p>
            Hello Withdrawls typically take 1-2 hours to process. We appreciate your patience and request that you wait for the status success before attempting to access your bank or e-wallet. Happy Gaming.
          </p>
        </div>
      </div>
      <div className='container-inner'>
        <img src={announcement} alt='announcement' />
        <div>
          <h3>
            Minors are not allowed to participate in the game
          </h3>
          <p>
            Minors are not allowed to participate in the game

          </p>
        </div>
      </div>
      <div className='container-inner'>
        <img src={announcement} alt='announcement'  />
        <div>
          <h3>
            Must tide the correct bank or e-wallet details
          </h3>
          <p>
            Attention for all members, please make sure that you registered your bank details correctly to avoid wrong transfers in future! Please contect our official customer service if you registered it wrong, Thank You!
          </p>
        </div>
      </div>
      <br/> 
    </div>
  );
};

export default Announcements;