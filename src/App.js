import './App.css';
import Footer from './components/footer/Footer';
import LeftBannerHome from './components/leftBanner/LeftBannerHome';

function App() {
  console.log("hello world")
  
  return (
    <div className="App">
      <LeftBannerHome />
      <Footer />
    </div>
  );
}

export default App;
