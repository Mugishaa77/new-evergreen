import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import evergreen from '../logo/new_evergreen.png';
import { BasketFill } from "react-bootstrap-icons";
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../features/authSlice';
import { toast } from 'react-toastify';

export default function Navbar () {
  const dispatch = useDispatch();
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
            <ul className="navbar-nav d-flex justify-content-evenly w-100 mb-2 mb-lg-0">
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
                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg><sup>{ basketTotalQuantity }</sup>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="/#about"
                  className={`nav-link text-light ${activeLink === '/#about' ? 'active' : ''}`}
                  onClick={() => setActiveLink('/#about')}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/#contact"
                  className={`nav-link text-light ${activeLink === '/#contact' ? 'active' : ''}`}
                  onClick={() => setActiveLink('/#contact')}
                >
                  Contact Us
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
              <Link to="/login" className="nav-link active text-light"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg></Link>
            </div>
          )}

        </div>
      </nav>
    </div>
  );
}
