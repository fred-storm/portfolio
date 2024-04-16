import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Router>
       
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
