import './App.css';
import {Header,Navigation} from './Components';  // import component directly from their directory 
// instead of their component files 
// import {Sliders} from './Components';
import Footer from './Components/Footer/Footer';
import Categories from './Components/Categories/Categories';
import Feature from './Components/Footer/Feature/Feature';
function App() {

  return (
    <div className="App">
      <div className="content-wrap">
      <Header/>
      {/* <h1>Hello from App.js</h1> */}
      {/* <Sliders/>          Slider by Abhishek Kumar */}

      <Navigation></Navigation>
      </div>
      <Categories/>
      <Feature/>
      <Footer/>
    </div>
  );
}

export default App;
