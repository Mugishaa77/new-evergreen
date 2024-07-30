import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToBasket } from '../features/basketSlice';
import './Display.css';


export default function Wholesale ( ) {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const product = {};
    const handleAddToBasket = (product) => {
    dispatch(addToBasket(product));
    navigate('/basket-one');
  };
    

    return(
        <div className="wholesale-goods">
            <Link to="/main-display" className="back-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
</svg>Back
            </Link>
            <Link to="/" className="next-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                </svg> Next
            </Link>
            <h3>Wholesale Market</h3>

            <div className="product-search">
                <p>Find what you are looking for <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></p>
          <input type="text" placeholder="Search Here"></input><button>Search</button>
  </div>

  <h6>Here, products entered by farmers and grocers that are of wholesale category will appear for purchase just as shown in the fresh market as follows;</h6>
   <div key="" className="product">
      <h4>Product Name</h4>
      <img src="https://res.cloudinary.com/sallymugisha/image/upload/v1677225880/Evergreen%20Farm%20Produce/produce/tomatoes_qf7hmx.webp" alt="product" />
      <div className="details">
        <span>Product Description</span>
        <span className="price">Kshs 10</span>
      </div>
      <button onClick={() => handleAddToBasket(product)}>
        Add to Basket
      </button>
    </div>
<div className="foot-note">
<h5>Looking for something else?</h5>
<Link to="/main-display">
    <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                        fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" 
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg><span>Go to main menu</span></p>
</Link>
</div>

        </div>
    )
}