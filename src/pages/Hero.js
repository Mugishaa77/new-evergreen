import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Hero() {


  return (
    <div className="hero"> 
        <div className="text">
          
            <h2 className="font-one">Your one stop shop for All your<br/>
            grocery and vegetable needs</h2>
            <hr/>
            <h3 className="font-two">Available in Wholesale and Retail!</h3>
              <Link to="/basket">
              <button type="button" class="btn btn-primary btn-lg rounded-3">Shop now</button>
            </Link>
           
                </div>
      </div>
    
  );
}
