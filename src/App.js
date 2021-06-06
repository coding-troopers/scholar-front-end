import './App.css';
import {Header} from './Components';  // import component directly from their directory 
                                      // instead of their component files 
// import {Sliders} from './Components';
import Navigation from './Components/Body/Navigation';
import ImageCarousel from './Components/ImageCarousel/ImageCarousel'                                       

function App() {

  return (
    <div className="App">
      <Header/>
      {/* <h1>Hello from App.js</h1> */}
      {/* <Sliders/>          Slider by Abhishek Kumar */}
      <ImageCarousel/>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
