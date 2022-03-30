import './Home.css';
import Logo from '../resources/images/BrandonLogo.png';

function Home(){
  return (
    <div className="HomeDiv">
{/*THIS IS WHERE WE WILL ADD THE GIF IN THE BACKGROUND*/}    
      <div className="logoDiv">
        <img className="logo" src={Logo}></img>
      </div>

      <div className="infoDiv">
        <div className="educationWrapper">
          <div className="educationTitle">
            <h4>EDUCATION</h4>
            <hr></hr>
          </div>
          <div className="educationInfo">
            <p className="educationSpacing">Highlands Ranch Highschool</p>
            <p>Highschool Diploma - 2020</p>
            <br/>
            <p>Don Bluth University</p>
            <p>Certificate Program - 2022</p>
          </div>
        </div>

        <div className="experienceWrapper">
          <div className="experienceTitle">
            <h4>EXPERIENCE</h4>
            <hr></hr>
          </div>
          <div className="experienceInfo">
            <p>“Draftsmanship, Intro to Animation, Animation Timing, Art of Storyboarding, Art of Layout, Principles of Acting, Script Writing, Producing a Short” </p>
            <p>Don Bluth Univ. 2022</p>
          </div>
        </div>
      </div>

      <div className="carouselWrapper">
        {/* THIS IS WHERE THE CAROUSEL WILL GO */}
      </div>
    
    </div>
  );
};

export default Home;