import React from 'react'; 
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Educators from './components/Educators/Educators';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  
  return (
    <Router> 
      <div className="App">
        <Educators />
       
        {/* <Routes>
          <Route exact path='/educators' element={<Educators/>} />
          
        </Routes> */}

      
      </div>
    </Router>
  );
}

export default App;
