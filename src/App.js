import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import LeftBannerHome from './components/leftBanner/LeftBannerHome'
import Home from './components/home/Home'

export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="AppDiv">
            <LeftBannerHome/>
            <Home />
            <Footer/>
          </div>
        }/>
      </Routes>
    </Router>
  );
}