import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import LeftBannerHome from './components/leftBanner/LeftBannerHome'
import Home from './components/home/Home'

export default function App() {
  console.log("hello world")
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <LeftBannerHome/>
          <Home/>
          <Footer/>
          </>
        }/>
      </Routes>
    </Router>
  );
}