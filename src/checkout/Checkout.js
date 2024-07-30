import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
import StepFive from './stepFive';
import './Checkout.css';


export default function Checkout () {

    const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const [storedData, setStoredData] = React.useState(null);

  const handleFormSubmit = (data) => {
    setStoredData(data);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <StepOne handleNextStep={handleNextStep} />;
      case 1:
        return <StepTwo handleNextStep={handleNextStep} onFormSubmit={handleFormSubmit}/>;
      case 2:
        return <StepThree handleNextStep={handleNextStep} />;
      case 3:
        return <StepFour handleNextStep={handleNextStep} storedData={storedData} />;
        case 4:
          return <StepFive handleNextStep={handleNextStep} />
      default:
        return null;
    }
  };


 
    return (
        <div className="checkout">
           <Link to="/basket-one" className="back-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
</svg>Back
            </Link>
            <h3> Checkout</h3>
             <ProgressBar percent={((currentStep + 1) / 5) * 100} unfilledBackground="#AFEEEE" filledBackground="#8fe051" >
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${
                accomplished ? "accomplished" : null
              }`}
            >
              <span className="index">{index + 1} </span>
              <p>Order Summary</p>
              
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${
                accomplished ? "accomplished" : null
              }`}
            >
              <span className="index"> {index + 1} </span>{" "}
              <p>Billing Information</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${
                accomplished ? "accomplished" : null
              }`}
            >
              <span className="index"> {index + 1} </span>
              <p>Payment Method</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${
                accomplished ? "accomplished" : null
              }`}
            >
              <span className="index"> {index + 1} </span>
              <p>Order Confirmation</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${
                accomplished ? "accomplished" : null
              }`}
            >
              <span className="order-complete">
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg> </span>
              <p> Order Complete</p>
            </div>
          )}
        </Step>
      </ProgressBar>
      <div className="last-check">

      {currentStep === 0 && (
        <div>
          <p>Step 1: Order Summary</p>
          <button onClick={handleNextStep} className="next-step-button">Next Step</button>
        </div>
      )}
      {currentStep === 1 && (
        <div>
          <p>Step 2: Billing Information</p>
          <button onClick={handleNextStep} className="next-step-button">Next Step</button>
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <p>Step 3: Payment Method</p>
          <button onClick={handleNextStep} className="next-step-button">Next Step</button>
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <p>Step 4: Order Confirmation</p>
           <button onClick={handleNextStep} className="next-step-button">Next Step</button>
          
          </div>
        
      )}
      {currentStep === 4 && (
        <div>
          <p>Step 5: Order Complete</p>
          <button onClick={() => setCurrentStep(0)} className="next-step-button">Restart</button>
          </div>
        
      )}
      </div>

           {renderStep()}
            

        </div>
    );
}