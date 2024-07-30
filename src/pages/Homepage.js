import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faWhatsapp  } from "@fortawesome/free-brands-svg-icons";
import '../App.css';



export default function Homepage () {

 

  
    return (
        <div className="homepage">            
            <div className="top" >
           <div className="welcome">
             Welcome to Evergreen!
             
           </div>
           
              
            </div>
           
<div class="contact" id="contact">
  <div class="container">
    
   
    <h4>Let's Talk Green!</h4>
    <p>If you have any questions or would like to get in touch with us, please feel free to reach out:</p>
    <div className="socials">
              <div className="horiz">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                title="Instagram"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="instagram-icon"
                /> 
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                title="Twitter"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />

              </a>

              <a
                href="https://api.whatsapp.com/send?phone=+254707720597"
                target="_blank"
                title="WhatsApp"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="whatsapp-icon"

                />
              </a>     
              </div>

              <a
                href="tel:+254707720597"
                target="_blank"
                title="Phone"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                <span>+254 707 720 597</span>
              </a>

              <a
                href="mailto:sallywanga2016@gmail.com"
                title="Email"
                rel="noopener noreferrer"
                className="email-link"
              >
                <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />
                <span>sallywanga2016@gmail.com</span>
              </a>

            
            </div>
    
   
  </div>
</div>





</div>

 
    );
}