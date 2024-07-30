import './Grocer.css';
import { NavLink, Outlet } from 'react-router-dom';

// 

export default function GrocerDashboard (){
    return(
        <div className="grocer-dashboard">
            <div className="side-nav">
                <h3>
                    <strong>Quick links</strong></h3>
                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/grocer-dashboard/grocer-setup">Setup</NavLink>
                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
            to ="/grocer-dashboard/grocer-profile">Profile</NavLink>
                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
            to ="/grocer-dashboard/grocer-summary">Summary</NavLink>
                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/grocer-dashboard/grocer-products">Products</NavLink>
                
               


            </div>
            <div className="content">
                <Outlet />

            </div>
        </div>
    );
}