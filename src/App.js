import './App.css';
import {Header,Navigation} from './Components';  // import component directly from their directory 
// instead of their component files 
// import {Sliders} from './Components';
import Footer from './Components/Footer/Footer';
function App() {

  return (
    <div className="App">
      <Header/>
      {/* <h1>Hello from App.js</h1> */}
      {/* <Sliders/>          Slider by Abhishek Kumar */}

      <Navigation></Navigation>
      <Footer></Footer>
    </div>
  );
}

export default App;
