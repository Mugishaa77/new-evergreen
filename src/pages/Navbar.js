import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import evergreen from '../logo/sharpened-evergreen.png';
import { BasketFill } from "react-bootstrap-icons";
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../features/authSlice';
import { toast } from 'react-toastify';

export default function Navbar () {
  const dispatch = useDispatch ();
  const auth = useSelector((state) => state.auth);
  const { basketTotalQuantity } = useSelector((state) => state.basket);
  const [activeLink, setActiveLink] = useState('/');
  

  return (
     <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-style">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={evergreen} height="70" alt="" title="evergreen"/>
          </a>
          <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link text-light ${activeLink === '/' ? 'active' : ''}`}
                  onClick={() => setActiveLink('/')}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/basket"
                  className={`nav-link text-light ${activeLink === '/basket' ? 'active' : ''}`}
                  onClick={() => setActiveLink('/basket')}
                >
                  Market
                </Link>
              </li> 
              <li className="nav-item">
                <Link
                  to="/farmer-dashboard"
                  className={`nav-link text-light ${activeLink === '/farmer-dashboard' ? 'active' : ''}`}
                  onClick={() => setActiveLink('/farmer-dashboard')}
                >
                  Farmer
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/grocer-dashboard"
                  className={`nav-link text-light ${activeLink === '/grocer-dashboard' ? 'active' : ''}`}
                  onClick={() => setActiveLink('/grocer-dashboard')}
                >
                  Grocer
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/main-display"
                  className={`nav-link text-light ${activeLink === '/main-display' ? 'active' : ''}`}
                  onClick={() => setActiveLink('/main-display')}
                >
                  Main Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/basket-one"
                  className={`nav-link text-light ${activeLink === '/basket-one' ? 'active' : ''}`}
                  onClick={() => setActiveLink('/basket-one')}
                >
                  <BasketFill color="white" size={24} />:{ basketTotalQuantity }
                </Link>
              </li>

               <li className="nav-item">
                <a
                  href="/#about"
                  className={`nav-link text-light ${
                    activeLink === '/#about' ? 'active' : ''
                  }`}
                  onClick={() => setActiveLink('/#about')}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/#contact"
                  className={`nav-link text-light ${
                    activeLink === '/#contact' ? 'active' : ''
                  }`}
                  onClick={() => setActiveLink('/#contact')}
                >
                  Contact
                </a>
              </li>
           
      
            </ul>
          </div>


          {auth._id ? (
            <div className="links">
              <div onClick={() => {
                toast.warning("You have logged out", {
                  position: "bottom-left"
                })
                dispatch(logoutUser(null))
              }}>
                Logout
              </div>
            </div>
          ) : (
            <div className="links">
              <Link to="/login" className="nav-link active text-light">Login</Link>
            </div>
          )}

        </div>
      </nav>
    </div>
  )}
