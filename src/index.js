import React from 'react';
import "./App.css";
import './style.css'
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Error404 from './components/Error404';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContectMe from './components/home/ContectMe';
import PrivacyPolicy from './components/policyPage/PrivacyPolicy';
import Announcements from './components/policyPage/Announcements';
import TermsAndConditions from './components/policyPage/TermsAndConditions';
import TDSDeduction from './components/policyPage/TDSDeduction';
import RefundCancellation from './components/policyPage/RefundCancellation';
import ReferEarn from './components/policyPage/ReferEarn';
import AboutUs from './components/quickLinksPages/AboutUs';
import HowToPlay from './components/quickLinksPages/HowToPlay';


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/contact-me',
        element: <ContectMe />
      }, {
        path: '/policy/announcements',
        element: <Announcements />
      }, {
        path: '/policy/privacy-policy',
        element: <PrivacyPolicy />
      }, {
        path: '/policy/terms-conditions',
        element: <TermsAndConditions />
      }, {
        path: '/policy/tds-deduction',
        element: <TDSDeduction />
      }, {
        path: '/policy/refund-cancellations',
        element: <RefundCancellation />
      }, {
        path: 'refer-earn',
        element: <ReferEarn />
      }, {
        path: '/page/about-us',
        element: <AboutUs />
      }, {
        path: '/page/how-to-play',
        element: <HowToPlay />
      }
    ]
  }
])

root.render(<RouterProvider router={appRouter} />)
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();