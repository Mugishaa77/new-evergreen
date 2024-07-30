import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserIdentity from './UserIdentity';
import UserAdressInfo from './UserAddressInfo';
import UserRole from './UserRole';
import Confirmation from './Confirmation';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from '../features/authSlice';



export default function Register () {


    const dispatch = useDispatch();
    const navigate = useNavigate ();

    // const auth and useEffect
     const auth = useSelector((state) => state.auth);
  console.log(auth);

  useEffect (() => {
     if (auth._id ){
       navigate("/basket")
     }
   },
  [auth._id, navigate])

    const [step, setStep] = React.useState(1);
    const [user, setUser] = React.useState({
        firstName: '',
        lastName: '',
        idNumber: '',
        phoneNumber: '',
        email:'',
        password: '',
        role: ''
    });
    console.log('User details:', user);

    
    const handleUserChange = (field, value) => {
        setUser(prevUser => ({...prevUser, [field]: value }));

    };

    const nextStep = () => {
        setStep(prevStep => prevStep + 1);
    };

    const prevStep = () => {
        setStep(prevStep => prevStep - 1);
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user))
      .then(() => {
        console.log('Registration successful');
        toast.success('Registration successful!', {
          position: 'top-center',
          theme: 'colored',
        });
        setTimeout(() => {
        navigate("/login");
      }, 2000); // wait for 2 seconds before redirecting to login page
      })
      .catch((err) => {
        console.log(err);
        toast.error('Registration failed', {
          position: 'top-center',
          theme: 'colored',
        });
        setStep(1); // redirect to first step
      });
  };


       






    switch(step) {
        case 1:
            return (
               
                <UserIdentity
                nextStep={nextStep}
                user={user}
                onChange={handleUserChange}
                />
               
            );

            case 2:
                return (
                   
                    <UserAdressInfo
                    nextStep={nextStep}
                    prevStep={prevStep}
                    onChange={handleUserChange}
                    user={user}
                    />
                    
                );

                case 3:
                    return (
                        
                        <UserRole
                        nextStep={nextStep}
                    prevStep={prevStep}
                    onChange={handleUserChange}
                    user={user}
                    />
                    
                    );

                    case 4:
                        return (
                           
                            <Confirmation
                            prevStep={prevStep}
                handleSubmit={handleSubmit}
          user={user}
        />
        );

        default:
            return null;

       


        

                        
    }


    
}
