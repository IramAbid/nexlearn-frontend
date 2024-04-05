import React from 'react';
import './home.css';
import student from '../../assets/student-student.png';
import Card from '../../components/card/card';
import course_icon from '../../assets/icons/online-course.png';
import growth from '../../assets/icons/growth.png';
import right_arrow from '../../assets/icons/right-arrow.png';
import video_icon from "./video.ico";
import tutor_icon from "./tutor.ico";
import courses_icon from "./courses.ico";


function Home(){
 return(
    <div id= "dashboard">
    <div id='home-page'>
        <div id="hero">
        <div className="hero-left">
        <h1 id= 'hero-heading'> <span id='word'>Studying</span> Online is now much easier</h1>
        <p id='hero-para'>NexLearn is an interesting platform that will teach you in more interactive way</p>
        <a href="/"><button id="join-free"><b>Join for free</b></button></a>
        </div>
        <div className="hero-right">
        
            <img src={student} id='student' alt="student-student"></img>            
            <div class="white-box">
            <img src={courses_icon}  id="courses_icon" alt="courses_icon"></img>
            <p className='icon-text'><span className='icon-bold-text'><b>1K+</b></span><br/>Online Courses</p>
            </div>
            <div class="white-box">
            <img src={video_icon}  id="video_icon" alt='video_icon'></img>
            <p className='icon-text'><span className='icon-bold-text'><b>3K+</b></span><br/>Video Lectures</p>
            </div>
            <div class="white-box">
            <img src={tutor_icon}  id="tutor_icon" alt='tutor_icon'></img>
            <p className='icon-text'><span className='icon-bold-text'><b>50+</b></span><br/>Tutors</p>
            </div>
        </div>
        
        </div>
        <h1 className='center-heading'>Fostering a playful & engaging learning environment</h1>
        <div className='dashboard-section'>

        <Card width={380} height={200} color="white" className="home-card">
        <div className='card-header'>
        <img src={course_icon} width={30} alt="courses-icon" />
        <h3>Enrolled Courses</h3>
        </div>
        <p>Lessons on design that cover the most recent developments.</p>
        <button className='card-button'>Learn More <img src={right_arrow} alt='arrow' className='right-arrow'/></button>
      </Card>

      <Card width={380} height={200} color="white" className="home-card">
      <div className='card-header'>
      <img src={course_icon} width={30} alt="courses-icon" />
        <h3>Recommended Courses</h3>
      </div>
        <p>Classes in development that cover the most recent developments.</p>
        <button className='card-button'>Learn More <img src={right_arrow} alt='arrow' className='right-arrow'/></button>
      </Card>

      <Card width={380} height={200} color="white" className="home-card">
      <div className='card-header'>
      <img src={growth} width={30} alt="performance-icon" />
        <h3>Track Performance</h3>
      </div>
        <p>User Interface Design courses that cover the most recent trends.</p>
        <button className='card-button'>Learn More <img src={right_arrow} alt='arrow' className='right-arrow'/></button>
      </Card>
           
        </div>
    </div>
   
    </div>
 );
}

  

export default Home;
