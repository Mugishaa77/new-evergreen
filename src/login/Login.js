import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../features/authSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user))
      .then((response) => {
        console.log('Log In successful');
        toast.success('LogIn successful', {
          position: 'top-center',
          theme: 'dark',
        });
        setTimeout(() => {
          navigate('/basket');
        }, 2000);
      })
      .catch((error) => {
        console.log('Log In failed');
        console.error(error);
        toast.error('Log In failed', {
          position: 'top-center',
          theme: 'dark',
        });
      });
  };

  return (
    <div className="log-in">
      <div className="container">
        <h1 className="log-in-title">Login</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">Email Address:</label>
            <input
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="form-control"
            />
          </div>
          <div>
            <label className="label">Password:</label>
            <input
              type="password"
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
              className="form-control"
            />
          </div>
          <button className="log-in-button" type="submit">
            Login
          </button>
          <div className="sign-up-guide">
            <p>Don't have an account?</p>
            <Link to="/register" className="sign-up-here">
              Register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
