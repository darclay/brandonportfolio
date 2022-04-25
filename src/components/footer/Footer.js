import './Footer.css'
import imgurPic from '../../assets/icons/imgur.png'
import youtubePic from '../../assets/icons/youtube.png'
import Resume from '../../assets/docs/test_resume.pdf'


export default function Footer(){
  
  return(
    <div className="footerDiv">

      <div className="signatureDiv">
        <a href="http://www.david-barclay-gurule.com" target="_blank">
          <div className="sigIcon footerIcon">
            <p className="signature">darclay<br/>2022</p>
          </div>
        </a>
      </div>

      <div className="imgurDiv">
        <a href="https://imgur.com/user/brandongurule20021/posts" target="_blank"><img className="footerIcon" src={imgurPic}></img></a>
      </div>

      <div className="resumeDiv">
        <div className="resumeIcon footerIcon">
          <a className="resumeDownload" href={Resume} target="_blank"><p>resume</p></a>
        </div>
      </div>

      <div className="youtubeDiv">
        <a href="https://www.youtube.com/channel/UCFPiSuG6AvtTdYjafSm25Gg/featured" target="_blank"><img className="footerIcon"  src={youtubePic}></img></a>
      </div>

    </div>
  )
}