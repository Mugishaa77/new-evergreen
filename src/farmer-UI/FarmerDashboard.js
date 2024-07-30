import './Farmer.css';
import { NavLink, Outlet } from 'react-router-dom';
// 
export default function FarmerDashboard (){
    return(
        <div className="farmer-dashboard">
            <div className="side-nav">
                <h3 className="main-title">
                    <strong>Quick links</strong></h3>
                 <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
            to ="/farmer-dashboard/farmer-setup">Set up</NavLink>
                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
            to ="/farmer-dashboard/farmer-profile">Profile</NavLink>
                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
            to ="/farmer-dashboard/summary">Summary</NavLink>
                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/farmer-dashboard/farmer-products">Products</NavLink>

            </div>
            <div className="content">
                <Outlet />

            </div>
        </div>
    );
}