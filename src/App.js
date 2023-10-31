import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About/About';
import Navbar from './Navbar/Navbar';
import Skillset from './Skills/Skillset';
import Education from './Education/Education';
import Project from './Projects/Project';
import Contact from './Contact/Contact';
import Resume from './FileUpload/Filepload';

function App() {
  
  return (
    <div className="App" style={{backgroundColor:'grey'}}>
      
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skillset/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/projects' element={<Project/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="/resume" element={<Resume  />} />
        </Routes>

      </BrowserRouter> 
      
    </div>
  );
}

export default App;
