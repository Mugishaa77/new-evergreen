import React, { useState } from 'react';
import './Checkout.css';

export default function StepTwo() {

  const [confirm, setConfirm] = React.useState({
    firstName: '',
    number: '',
    address: ''
  });

  const [storedData, setStoredData] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfirm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the form data in the state variable
    setStoredData(confirm);

    // Reset the form fields
    setConfirm({
      firstName: '',
      number: '',
      address: ''
    });
  };
  return (
    <div className="step-two">
      <div className="container">
        <h1><strong>Billing information</strong></h1>
        <form>
          <label>Name:</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={confirm.firstName}
          />

          <label>Number:</label>
          <input
            type="text"
            name="number"
            onChange={handleChange}
            value={confirm.number}
          />

          <label>Physical Address:</label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={confirm.address}
          />

          <button onClick ={handleSubmit}>Save</button>
        </form>
      </div>
      
    </div>
  );
}



