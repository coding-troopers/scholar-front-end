import './App.css';
import {Header} from './Components';  // import component directly from their directory 
                                      // instead of their component files 

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hello from App.js</h1>
    </div>
  );
}

export default App;
