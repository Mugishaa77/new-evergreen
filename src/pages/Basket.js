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