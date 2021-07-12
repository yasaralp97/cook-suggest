import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Body from "./components/body";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <div className="Body row">
          <div className="Sidebar col-2 d-flex flex-row justify-content-center">
            <Sidebar/>
          </div>
          <div className="Content col-10 d-flex justify-content-center flex-wrap">
            <Body/>
          </div>
        </div>
        
      </div>
      
      
    </div>
  );
}

export default App;
