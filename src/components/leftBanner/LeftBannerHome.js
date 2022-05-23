import './LeftBannerHome.css'
import brandon_headshot from '../../assets/images/brandon_headshot.png'

export default function LeftBannerHome(){
  
  return (
    <div className="LeftBannerHomeDiv">
      <div className="headshotDiv">
        <img src={brandon_headshot}></img>
      </div>
      <div className="missionTitle">
        <h2 className="title">BRANDON GURULE</h2>
      </div>
      <div className="missionStatement">
        <p className="statement">As far back as I can remember, I have always wanted to tell stories. I was inspired by many works of art, but notibly, I was inspired by the work of ex-Disney animator, Don Bluth." </p>
      </div>

    </div>
  )
}