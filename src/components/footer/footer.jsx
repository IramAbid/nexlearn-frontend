import { useLinkClickHandler } from 'react-router-dom';
import footer from './footer.css';
import twitter from './social_media_icons/twitter-blue.png';
import instagram from './social_media_icons/instagram.png';
import linkedIn from './social_media_icons/linkedin.png';


function Footer(){
    return(
        <div className='Footer'>
           
            <div className='footer-list'>
                <h5>NexLearn</h5>
                <ul className='list'>                  
                    <li>An Online Learning Platfrom</li>
                    <li>Aligarh Muslim University</li>
                    <li>Aligarh-202001</li>
                </ul>
            </div>
           
            
            <div className='footer-list'>
            <h5>Menu</h5>
                <ul className='list'>
                    <li>Courses</li>
                    <li>Contact us</li>
                    <li>FAQs</li>
                </ul>
            </div>
            
           
            <div className='footer-list'>
            <h5>Social Media</h5>
                <ul className='list'>
                    <li><a><img src={twitter} alt="twitter " width={30}/></a></li>
                    <li><a><img src={instagram} alt="instagram" width={30}/></a></li>
                    <li><a><img src={linkedIn} alt="linkedIn " width={30}/></a></li>
                </ul>
            </div>
            
        </div>

       
    );
}

export default Footer;