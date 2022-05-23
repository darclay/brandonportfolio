import './LeftBannerHome.css'
import brandon_headshot from '../../assets/images/brandon_headshot.png'

export default function LeftBannerHome(){
  
  return (
    <div className="LeftBannerHomeDiv">
      <div className="headshotDiv">
        <img src={brandon_headshot} alt="brandon headshot"></img>
      </div>
      <div className="missionTitle">
        <h2 className="title">BRANDON GURULE</h2>
      </div>
      <div className="missionStatement">
        <p className="statement">As far back as I can remember, I have always wanted to tell stories. I was inspired by many works of art, but notibly, I was inspired by the work of Don Bluth and Stephen Hillenburg." </p>
      </div>
      <div className="hidden">
        <h2>Education</h2>
        <p>Highlands Ranch Highschool<br/>Highschool Diploma - 2020</p>
        <p>Don Bluth University<br/>Certificate Program - 2022</p>
        <h2>Experience</h2>
        <p>Draftsmanship, Intro to Animation, Animation Timing, Art of Storyboarding,<br/>Art of Layout, Principles of Acting, Script Writing, Producing a Short</p>
        <p>Don Bluth Univ. 2022</p>
      </div>

    </div>
  )
}