import './LeftBannerHome.css'
import brandon_headshot from '../../assets/images/brandon_headshot.png'

export default function LeftBannerHome(){
  
  return (
    <div className="LeftBannerHomeDiv">
      <div className="headshotDiv">
        <img src={brandon_headshot}></img>
      </div>
      <div className="missionTitle">
        <h2 className="title">MISSION STATEMENT</h2>
      </div>
      <div className="missionStatement">
        <p className="statement">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

    </div>
  )
}