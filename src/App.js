import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import LeftBannerHome from './components/leftBanner/LeftBannerHome'
import Home from './components/home/Home'
import BootstrapCarousel from '../src/components/carousel/BootstrapCarousel'
import Error from '../src/components/error/Error'


function App() {
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
                 
        <Route path="/slider" element={
          <BootstrapCarousel/>
        }/>

        <Route path="/error" element={
          <Error/>
        }/>

      </Routes>
    </Router>
  );
}

export default App;
