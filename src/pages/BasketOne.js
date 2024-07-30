import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Basket.css';
import { addToBasket, clearBasket, decreaseBasket, removeFromBasket, getTotals } from '../features/basketSlice';

export default function BasketOne () {

    const basket = useSelector((state) => state.basket);

    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(getTotals());
    }, [basket, dispatch]);

    

    const handleRemoveFromBasket = (basketItem) => {
        dispatch(removeFromBasket(basketItem));

    };

    const handleDecreaseBasket = (basketItem) => {
        dispatch(decreaseBasket(basketItem));
    };

    const handleIncreaseBasket = (basketItem) => {
        dispatch(addToBasket(basketItem));
    };

    const handleClearBasket = () => {
        dispatch(clearBasket());
    };


    return (
        <div className="basket-container">
            <Link to="/basket" className="back-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
</svg>Back
            </Link>
            <h2>Shopping Basket</h2>
            {basket.basketItems.length === 0 ? 
            (<div className="basket-empty">
                <p>Your Basket is currently empty</p>
                <div className="start-shopping">
                    <Link to ="/basket">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                        fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" 
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <span>Start Shopping</span>
                    </Link>

                </div>
            </div>): 
            (<div>
                <div className="titles">
                   <h3 className="product-title">Product</h3> 
                   <h3 className="price">Price</h3>
                   <h3 className="quantity">Quantity</h3>
                   <h3 className="total">Total</h3>
                </div>
                <div className="basket-items">
                    {basket.basketItems?.map(basketItem => (
                        <div className="basket-item" key={basketItem._id}>
                            <div className="basket-product">
                                <img src={basketItem.image} alt={basketItem.name}/>
                                <div>
                                    <h3>{basketItem.name}</h3>
                                    <p>{basketItem.desc}</p>
                                    <button onClick = { () => handleRemoveFromBasket(basketItem)}>Remove</button>
                                </div>
                            </div>

                            <div className="basket-product-price">
                                Kshs{basketItem.price}
                            </div>
                            <div className="basket-product-quantity">
                                <button onClick = {() => handleDecreaseBasket(basketItem)}className="less">-</button>
                                <div className="count">{basketItem.basketQuantity}</div>
                                <button className="more" onClick = {() => handleIncreaseBasket(basketItem)}>+</button>
                        </div>

                        <div className="basket-product-total-price">
                            Kshs{basketItem.price * basketItem.basketQuantity}
                        </div>
                        </div>
                    ))}
                </div>

                <div className="basket-summary">
                    <button className="clear-basket" onClick = {() => handleClearBasket()}>Clear Basket</button>
                    <div className="basket-checkout">
                        <div className="sub-total">
                            <span>Subtotal</span>
                            <span><strong>
                                Kshs {JSON.stringify(basket.basketTotalAmount)}</strong></span>
                        </div>
                        <p>Taxes and Delivery calculated at checkout</p>
                        <Link to="/checkout">
                            <button className="checkout-btn">Check-out</button>
                        </Link>
                        
                        <div className="continue-shopping">
                    <Link to ="/basket">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                        fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" 
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <span>Continue Shopping</span>
                    </Link>

                </div>

                    </div>
                </div>
            </div>
            )}

        </div>
    );
}