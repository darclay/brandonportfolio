import './Footer.css'
import imgurPic from '../../assets/icons/imgur.png'
import youtubePic from '../../assets/icons/youtube.png'


function Footer(){
  
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
          {/* This is the place where the download of the resume file will occur. */}
          <img className="backgroundGIF" src="https://media1.giphy.com/media/ki29bvF1a9RwSijPGB/giphy.gif?cid=ecf05e47cj4xabpnalt56byc7205e0hnwzoyunuu05ax8ma0&rid=giphy.gif&ct=g"></img>
        </div>
      </div>

      <div className="youtubeDiv">
        <a href="https://www.youtube.com/channel/UCFPiSuG6AvtTdYjafSm25Gg/featured" target="_blank"><img className="footerIcon"  src={youtubePic}></img></a>
      </div>

    </div>
  )
}

export default Footer;