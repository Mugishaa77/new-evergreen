import './Grocer.css';
import { Outlet, useNavigate } from 'react-router-dom';

export default function GrocerProducts (){

    const navigate = useNavigate ();

    return (
        <div>
        <div className="grocer-products">

           <h3>Products</h3>
           {/*  */}

        <button onClick ={() => navigate("/grocer-dashboard/grocer-products/grocer-create-product")} >

            Create</button>
            
    </div>
    <Outlet />
    </div>)
    
}