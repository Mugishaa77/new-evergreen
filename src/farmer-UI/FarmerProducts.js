import './Farmer.css';
import { Outlet, useNavigate } from 'react-router-dom';

export default function FarmerProducts (){

    const navigate = useNavigate ();

    return (
        <div>
        <div className="farmer-products">

           <h3>Products</h3>

        <button onClick ={() => navigate("/farmer-dashboard/farmer-products/create-product")} >

            Create</button>
            
    </div>
    <Outlet />
    </div>)
    
}