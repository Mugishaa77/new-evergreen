import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { baseUrl } from '../features/api';
import { addToBasket } from '../features/basketSlice';
import './Basket.css';

export default function Basket() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: data, status } = useSelector((state) => state.products);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${baseUrl}/products`);
      console.log(`${baseUrl}/products`)
      console.log(process.env.REACT_APP_BASE_URL)
      const result = await response.json();
      setIsLoading(false);
      setFetchedData(result);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const products = data || fetchedData;

  const handleAddToBasket = (product) => {
    dispatch(addToBasket(product));
    navigate('/basket-one');
  };

  return (
    <div className="basket">
       <Link to="/main-display" className="back-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
</svg>Back
            </Link>
      <Link to="/basket-one" className="next-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
        </svg>{' '}
        Next
      </Link>
      {isLoading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>an error occurred</p>
      ) : (
        <>
          <h2> Fresh Market</h2>
          <div className="products">
           {products.map((product) => {
  console.log(product); // add this line to print the product object
  return (
    <div key={product._id} className="product">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <div className="details">
        <span>{product.desc}</span>
        <span className="price">Kshs {product.price}</span>
      </div>
      <button onClick={() => handleAddToBasket(product)}>
        Add to Basket
      </button>
    </div>
  );
})}


          </div>
        </>
      )}
    </div>
  );
}