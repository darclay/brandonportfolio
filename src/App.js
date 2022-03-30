import './App.css';
import Footer from './components/footer/Footer';
import LeftBannerHome from './components/leftBanner/LeftBannerHome';
import Home from './components/home/Home';

function App() {
  console.log("hello world")
  
  return (
    <div className="App">
      <LeftBannerHome />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
