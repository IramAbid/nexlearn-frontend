import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './pages/home/home.jsx';
import SignUp from './pages/sign_up/sign_up.jsx';
import SignIn from './pages/sign_in/sign_in.jsx';
import RecCourses from './pages/rec_courses/rec_courses.jsx';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        
          <Routes>
          <Route exact path="/" element={<Home />} />      
          <Route path="/sign-up" element={<SignUp/>} /> 
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/recommended-courses" element={<RecCourses/>} />
          </Routes>           
        <Footer />
      </div>
    </Router>
  );
}

export default App;
