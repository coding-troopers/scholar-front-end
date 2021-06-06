import './App.css';
import {Header,Navigation} from './Components';  // import component directly from their directory 
// instead of their component files 

import {ImageCarousel,Footer,Categories} from './Components'                                       

function App() {

  return (
    <div className="App">
      <div className="content-wrap">
      <Header/>
      <ImageCarousel/>
      <Navigation></Navigation>
      </div>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default App;
