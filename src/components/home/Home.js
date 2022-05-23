import './Home.css'
import Logo from '../../assets/images/BrandonLogo.png'
import LittleFoot from '../../assets/gifs/littlefoot.gif'
import BootstrapCarousel from '../carousel/BootstrapCarousel';
import { Link } from 'react';

export default function Home(){
  return (
    <div className="HomeDiv">
      <div className="logoDiv">
        <img className="logo" src={Logo}></img>
      </div>

      <div className="backgroundGIF">
        <img className="backgroundGIF" src={LittleFoot}></img>
      </div>

      <div className="infoDiv">
        <div className="educationWrapper">
          <div className="educationTitle">
            <h4>EDUCATION</h4>
            <hr></hr>
          </div>
          <div className="educationInfo">
            <p className="educationSpacing">
              Highlands Ranch Highschool<br/>
              Highschool Diploma - 2020
            </p>
            <p id="newEd">
              Don Bluth University<br/>
              Certificate Program - 2022
            </p>
          </div>
        </div>

        <div className="experienceWrapper">
          <div className="experienceTitle">
            <h4>EXPERIENCE</h4>
            <hr></hr>
          </div>
          <div className="experienceInfo">
            <p>
            “Draftsmanship, Intro to Animation, Animation Timing, Art of Storyboarding,<br/>
            Art of Layout, Principles of Acting, Script Writing, Producing a Short”
            </p>
            <p>Don Bluth Univ. 2022</p>
          </div>
        </div>
      </div>

      <div className="carouselWrapper">
        <BootstrapCarousel/>
      </div>
    
    </div>
  );
};