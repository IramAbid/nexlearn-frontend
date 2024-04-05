import React from 'react';
import './rec_courses.css';
import Card from '../../components/card/card';
import right_arrow from '../../assets/icons/right-arrow.png';

function RecCourses(){
    return(
       <div id='home-page'>
          
           <div className="heading">
           <h1 id= 'hero-heading'>RECOMMENDED COURSES</h1>
           </div>
          
           <div className='courses-section'>
   
           <Card width={380} height={500} color="white" className="home-card">
           <div className='card-header'>
           <img src="/" width={30} alt="courses-icon" />
           <h3>Enrolled Courses</h3>
           </div>
           <p>Lessons on design that cover the most recent developments.</p>
           <button className='card-button'>Learn More <img src={right_arrow} alt='arrow' className='right-arrow'/></button>
           </Card>
   
         <Card width={380} height={500} color="white" className="home-card">
         <div className='card-header'>
         <img src="/" width={30} alt="courses-icon" />
           <h3>Recommended Courses</h3>
         </div>
           <p>Classes in development that cover the most recent developments.</p>
           <button className='card-button'>Learn More <img src={right_arrow} alt='arrow' className='right-arrow'/></button>
         </Card>
   
         <Card width={380} height={500} color="white" className="home-card">
         <div className='card-header'>
         <img src="" width={30} alt="performance-icon" />
           <h3>Track Performance</h3>
         </div>
           <p>User Interface Design courses that cover the most recent trends.</p>
           <button className='card-button'>Learn More <img src={right_arrow} alt='arrow' className='right-arrow'/></button>
         </Card>
              
           </div>
       
      
       </div>
    );
   }
   
     
   
   export default RecCourses;
   