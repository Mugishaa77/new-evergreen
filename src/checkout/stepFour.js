import React from 'react';
import './Checkout.css';


export default function StepFour ( { storedData }) {
    return (
        <div className="step-four">
           <h1><strong>Order confirmation</strong></h1>
           <p>Items:</p>
            <p>Shipping Information:</p>
            {storedData && (
               <div>
           {storedData.firstName} {storedData.number} {storedData.address}
    </div>
           )}
           <p>Payment Method:</p>

           </div>
         
        
    );
}