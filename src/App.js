import './App.css';
import {Header} from './Components';  // import component directly from their directory // instead of their component files
import Navigation from './Components/Body/Navigation';
                                       
function App() {

  return (
    <div className="App">
      <Header/>
      <h1>Hello from App.js</h1>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
