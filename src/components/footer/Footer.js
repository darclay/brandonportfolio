import './Footer.css';
import imgurPic from '../resources/icons/imgur.png';
import youtubePic from '../resources/icons/youtube.png';
import Axios from 'axios';
import FileDownload from 'js-file-download';


function Footer(){
  const download = (ev) => {
    ev.preventDefault()
    console.log('clicked')
    Axios({
      url: "http://localhost:5000/server",
      method: "GET",
      responseType: "blob"
    }).then((res)=>{
      console.log(res)
      FileDownload(res.data, "brandon_resume.pdf")
    })
  }
  
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
        <div className="resumeIcon footerIcon" onClick={(ev)=>{download(ev)}}>
          {/* This is the place where the download of the resume file will occur. */}
          <p>resume</p>
        </div>
      </div>

      <div className="youtubeDiv">
        <a href="https://www.youtube.com/channel/UCFPiSuG6AvtTdYjafSm25Gg/featured" target="_blank"><img className="footerIcon"  src={youtubePic}></img></a>
      </div>

    </div>
  )
}

export default Footer;