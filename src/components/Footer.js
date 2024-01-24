
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import android from '../assets/img/android.png';

const Footer = () => {

  const handleDownload = () => {
    const githubRawURL = "https://github.com/mnu4513/app/raw/main/betninja.apk";
    const a = document.createElement('a');
    a.href = githubRawURL;
    a.download = 'bet-ninja.apk'; // Specify the filename
    a.click();
  };


  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='links'>

          <div className='content'>
            <h3>POLICIES</h3>
            <ul>
              <li>
                <Link to='/policy/announcements' >Announcements</Link>
              </li>
              <li>
                <Link to='/policy/privacy-policy' >Privacy Policy</Link>
              </li>
              <li>
                <Link to='/policy/terms-conditions' >Terms and Conditions</Link>
              </li>
              <li>
                <Link to='/policy/refund-cancellations' >Refund and Cancellations</Link>
              </li>
              <li>
                <Link to='/policy/tds-deduction' >TDS Deducation</Link>
              </li>

            </ul>
          </div>

          <div className='content'>
            <h3>QUICK LINKS</h3>
            <ul>
              <li>
                <Link to='/policy/refer-earn' >Refer and Earn</Link>
              </li>

              <li>
                <Link to='/page/about-us' >About Us</Link>
              </li>
              <li>
                <Link to='/page/how-to-play' >How to Play</Link>
              </li>

            </ul>
          </div>
        </div>

        <div className='content'>
          <h3>Contact US</h3>
          <p>
            #15A, 4th Floor, City Vista, <br /> Tower A, Fountain Road, Kharadi,<br /> Pune, MH - 411014 <br />
            Email : support@betninja.co.in <br />
            Phone : +91-8602695518
          </p>
        </div>


        {/* <div className="contact">
          <h3>Contact</h3>
          <p>jaybhagwan1@proton.me</p>
          <p>Phone: +91-7073979424</p>
        </div> */}
        <div className="social-media">

          {/* <h3>Connect with Me</h3>
          <a href="https://www.linkedin.com/in/jay-bhagwan/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/mnu4513" target="_blank" rel="noopener noreferrer">
            GitHub
          </a> */}
          {/* Add more social media links as needed */}
        </div>
      </div>
      <Button className='my-3' variant='outline-success' onClick={() => handleDownload()} > <img src={android} alt="an" width="30px" style={{ borderRadius: "50%" }} /> Download App</Button>
      <div className="copyright">
        <p>&copy; 2023 Bet Ninja | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;