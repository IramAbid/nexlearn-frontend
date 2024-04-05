import React from 'react';
import student from '../../assets/student-teacher.png';
import Card from '../../components/card/card';
import sign_in_css from './sign_in.css'

function Sign_In(){
 return(

    <div className='Sign-in'>

            <div className="sign-in-left">
                
                <img src={student}  id='student' alt="student-student"></img> 
                <p id='sign-in-para'>NexLearn is an interesting platform that will teach you in more interactive way</p>
             </div>

             <div className="sign-in-right">
                <h1 id= 'sign-in-heading'> Welcome to NexLearn!</h1>
                <div className='login-register-button'>
                    <button className='login-button'>Login</button>
                    <button className='register-button'>Register</button>
                </div>
                <Card width={380} height={400} color="white" >
                <div className='sign-card'>
                <label for="user-email">Email:</label>
                <input type="email" id="user-email" name="email" required/>
                <label for="user-name">Username or Email</label>
                <input type="email" id="user-email" name="username" required/>
        
                <label for="user-password">Password</label>
                <input type="password" id="user-password" name="password" required/>
      
                
                <input type="submit" value="Login" id='login'></input>
                </div>
                </Card>
             </div>
    
        </div>
 );
}

  

export default Sign_In;