import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound () {
    return (
        <div className="not-found">
            <div className="warning">
                <h2>404</h2>
            <p>Page Not Found 💔 </p>
            <hr/>
            </div>
            
            <Link to ="/" className="statement">
                
                    Go back to home-page
                
            </Link>

        </div>
    );
}