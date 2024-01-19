import React from "react";
import './Home.css';
import ss from '../assets/img/ss.jpeg'
import AsideHome from "./home/AsideHome";
import WinnersList from "./home/WinnersList";



const Home = () => {

   return (
      <div className="home">
         <div id="home-top">
            <AsideHome />
            <img src={ss} alt="pp" />
         </div>

         <div >
            <WinnersList />
         </div>
      </div>
   );
};

export default Home;
