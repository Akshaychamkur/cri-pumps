
import React from 'react';
import './Main.css';
import trophy from '../assets/1.png'
import photo from '../assets/2.png'
import pumps from '../assets/3.png'
import logo from '../assets/logo.png'
import { SocialIcon } from 'react-social-icons'
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';

const Main = () => {
  return (
    <div className="container">
      <div className="logosection">
        <img src={logo} alt="" />
      </div>
      <div className="main-section">
        <img src={trophy} alt="Award Trophy" />
        <div className="bullet-points">
          <h3>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
          </h3>
          <ul>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
          </ul>
          <div className="partnership-section">
            <img src={photo} alt="Partnership Illustration" />
          </div>
          <p>Government of India has awarded the <span>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>

      </div>
      <div className="product-section">
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
        <div className="product">
          <img src={pumps} alt="pumps" />
          <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        </div>
      </div>
      <div className="service-section">
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <ul className='service-list'>
          <li>CHEMICALS</li>
          <li>PROCESS POWER WATER</li>
          <li>WASTE WATER</li>
          <li>OILS GAS</li>
          <li>PHARMA</li>
          <li>SUGARS DISTILLERIES</li>
          <li>PAPER PULP</li>
          <li>MARINE DEFENCE</li>
          <li>METAL MINING</li>
          <li>FOOD BEVERAGE</li>
          <li>PETROCHEMICAL REFINERIES</li>
          <li>SOLAR BUILDING HVAC</li>
          <li>FIRE FIGHTING</li>
          <li>AGRICULTURE RESIDENTIAL</li>
        </ul>      </div>
      <div className="footer-section">
        <div className="call">
          <CallIcon />
          <p>Toll Free <span>1800 200 1234</span></p>
        </div>
        <div className="facebook">
          <SocialIcon url="https://facebook.com/cripumps" />
          <a href="https://facebook.com/cripumps">www.facbook.com/cripumps</a>
        </div>
        <div className="website">
          <LanguageIcon />
          <a href="https://www.crigroups.com">www.crigroups.com</a>
        </div>
      </div>
    </div>
  );
};

export default Main;
