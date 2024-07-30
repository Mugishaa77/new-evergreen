import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { baseUrl } from '../features/api';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './Farmer.css';

function FarmerSetUp() {
  // 
  const [farmer, setFarmer] = useState({
    fullName: '',
    emailAddress: '',
    contactNumber: '',
    stallName: '',
    stallNumber: ''
  });

  const handleFarmerChange = (event) => {
    const { name, value } = event.target;
    setFarmer(prevFarmer => ({ ...prevFarmer, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${baseUrl}/farmers`, farmer);
      // display success message to user
      toast.success('Profile created successfully!', {
        position: 'top-center',
        theme: 'colored',
      });
    } catch (err) {
      console.error(err);
      // display error message to user
      toast.error('Failed to create profile', {
        position: 'top-center',
        theme: 'colored',
      });
    }
  };

  return (
    <div className="farmer-setup">
      <div className="container">
        <h2>Profile details</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            value={farmer.fullName}
            onChange={handleFarmerChange}
          />

          <label>Email Address:</label>
          <input
            type="text"
            name="emailAddress"
            className="form-control"
            value={farmer.emailAddress}
            onChange={handleFarmerChange}
          />

          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            className="form-control"
            value={farmer.contactNumber}
            onChange={handleFarmerChange}
          />

          <label>Stall Name:</label>
          <input
            type="text"
            name="stallName"
            className="form-control"
            value={farmer.stallName}
            onChange={handleFarmerChange}
          />

          {/* Should be auto-generated based on first-come first-serve basis // */}
          <label>Stall Number:</label>
          <input
            type="text"
            name="stallNumber"
            className="form-control"
            value={farmer.stallNumber}
            onChange={handleFarmerChange}
          />

          <button type="submit">Submit</button>
        </form>
        <Link to="/farmer-dashboard">Go back to dashboard</Link>
      </div>
    </div>
  );
}

export default FarmerSetUp;