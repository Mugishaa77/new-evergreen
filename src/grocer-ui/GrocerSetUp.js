import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { baseUrl } from '../features/api';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './Grocer.css';

export default function GrocerSetUp () {

  const [grocer, setGrocer] = React.useState({
    fullName: '',
        emailAddress: '',
        contactNumber: '',
        stallName: '',
        stallNumber: ''

  })

  console.log('New grocer:', grocer);

    const handleGrocerChange = (event) => {
  const { name, value } = event.target;
  setGrocer(prevGrocer => ({...prevGrocer, [name]: value }));
};

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${baseUrl}/grocers`, grocer);
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
// 

   
      
    return(
        <div className="grocer-setup">
            <div className="container">
                <h2>Profile details</h2>
                <form>
                <label>Full Name:</label>
                
      <input
        type="text"
        name="fullName"
        className="form-control"
        value={grocer.fullName}
            onChange={handleGrocerChange}
      />

      <label>Email Address:</label>
      <input
        type="text"
        name="emailAddress"
        className="form-control"
        value={grocer.emailAddress}
        onChange={handleGrocerChange}
            
      />

      <label>Contact Number:</label>
      <input
        type="text"
        name="contactNumber"
        className="form-control"
         value={grocer.contactNumber}
           onChange={handleGrocerChange}
      />

      <label>Stall Name:</label>
      <input
        type="text"
        name="stallName"
        className="form-control"
        value={grocer.stallName}
        onChange={handleGrocerChange}
            
      />


    {/* Should be auto-generated based on first-come first-serve basis // */}
      <label>Stall Number:</label>
      <input
        type="text"
        name="stallNumber"
        className="form-control"
        value={grocer.stallNumber}
        onChange={handleGrocerChange}
            
      />


      
         <button onClick={handleSubmit}>Submit</button>
      

        
    </form>
    <Link to="/farmer-dashboard">
          Go back to dashboard</Link>
   


            </div>
        </div>
    );
}

