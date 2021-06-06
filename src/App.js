import './App.css';
import {Header,Navigation} from './Components';  // import component directly from their directory 
// instead of their component files 
// import {Sliders} from './Components';
// import Navigation from './Components/Body/Navigation';
import ImageCarousel from './Components/ImageCarousel/ImageCarousel'                                       

import Footer from './Components/Footer/Footer';
import Categories from './Components/Categories/Categories';
function App() {

  return (
    <div className="App">
      <div className="content-wrap">
      <Header/>
      {/* <h1>Hello from App.js</h1> */}
      {/* <Sliders/>          Slider by Abhishek Kumar */}
      <ImageCarousel/>
      <Navigation></Navigation>
      </div>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default App;
