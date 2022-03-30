import './Home.css';

function Home(){
  return (
    <div className="HomeDiv">
{/*THIS IS WHERE WE WILL ADD THE GIF IN THE BACKGROUND*/}    
      <div className="logoDiv">
        <img className="logo" src="#"></img>
      </div>
      <div className="infoDiv">
        <div className="educationWrapper">
          <div className="eductionTitle"></div>
          <div className="eductionInfo"></div>
        </div>
        <div className="experienceWrapper">
          <div className="experienceTitle"></div>
          <div className="experienceInfo"></div>
        </div>
      </div>

      <div className="carouselWrapper">
        {/* THIS IS WHERE THE CAROUSEL WILL GO */}
      </div>
    
    </div>
  );
};

export default Home;