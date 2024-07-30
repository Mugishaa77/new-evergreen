import { Link } from 'react-router-dom';
import './stalls.css';

export default function StallNumbers () {
    return (
        <div className="stall-numbers">
             <Link to="/main-display" className="back-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
</svg>Back
            </Link>
            <h3>Stall Numbers</h3>

            <h6>A list of the stall numbers asigned to the farmers and grocers during setup and registration
                is displayed here in a list.
                This allows the user to navigate to the desired stall using only the stall number as identity, when they click on it.
            </h6>

            <div className="foot-note">
<h5>Looking for something else?</h5>
<Link to="/main-display">
    <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                        fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" 
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg><span>Go to main menu</span></p>
</Link>
</div>

        
        </div>
    );
}