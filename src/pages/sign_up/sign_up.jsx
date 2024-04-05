import React from 'react';
import student from '../../assets/student-teacher.png';
import Card from '../../components/card/card';
import './sign_up.css';

function Sign_Up(){
 return(

    <div className='Sign-up'>

            <div className="sign-in-left">
                
                <img src={student}  id='student' alt="student-student"></img> 
                <p id='sign-in-para'>NexLearn is an interesting platform that will teach you in more interactive way</p>
             </div>

             <div className="sign-in-right">
                <h1 id= 'sign-in-heading'> Welcome to NexLearn!</h1>
                <div className='login-register-button'>
                    <button className='login-button-1'>Login</button>
                    <button className='register-button-1'>Register</button>
                </div>
                <Card width={380}  color="white" >
                <div className='sign-card'>
                <label for="user-email">Email Address</label>
                <input type="email" id="user-email" name="email" required/>
                <label for="user-name">Username</label>
                <input type="email" id="user-email" name="username" required/>
        
                <label for="user-password">Password</label>
                <input type="password" id="user-password" name="password" required/>
                <label for="user-password">Re-enter Password</label>
                <input type="password" id="user-password" name="password" required/>
                
                <input type="submit" value="Register" id='register'></input>
                </div>
                </Card>
             </div>
    
        </div>
 );
}

  

export default Sign_Up;