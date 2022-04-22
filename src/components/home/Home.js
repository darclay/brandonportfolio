import './Home.css'
import Logo from '../../assets/images/BrandonLogo.png'
import ImgSlider from '../carousel/ImgSlider';

function Home(){
  return (
    <div className="HomeDiv">
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
            <p id="newEd">Don Bluth University</p>
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
        <ImgSlider />
      </div>
    
    </div>
  );
};

export default Home;