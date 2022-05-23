import './Footer.css'
import imgurPic from '../../assets/icons/imgur.png'
import resumeIcon from '../../assets/icons/resume.png'
import Resume from '../../assets/docs/brandon_resume.pdf'


export default function Footer(){
  
  return(
    <div className="footerDiv">
      <ul id="footerIcons">
        
        <li>
          <a className="links" href="https://imgur.com/user/brandongurule20021/posts" target="_blank" rel="noreferrer">
            <div className="footerIcon imgIcon">
              <img className="imgurIcon" src={imgurPic} alt="imgur icon"/>
            </div>
          </a>
        </li>
        
        <li>
          <a className="links" href={Resume} target="_blank" rel="noreferrer">
            <div className="footerIcon resumeIcon">
              {/* <p className="resumeText">resume</p> */}
              <img className="resumePic" src={resumeIcon} alt="resume icon"/>

            </div>
          </a>
        </li>
        
        <li>
          <a className="links" href="https://www.youtube.com/channel/UCFPiSuG6AvtTdYjafSm25Gg/featured" target="_blank" rel="noreferrer">
            <div className="footerIcon youtubeIcon">
              <div className="youtubeArrow"></div>
            </div>
          </a>
        </li>
      
      </ul>
    </div>
  )
}