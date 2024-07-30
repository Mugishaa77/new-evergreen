import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTotals } from '../features/basketSlice';



export default function StepOne() {

  const dispatch = useDispatch();

  const basket = useSelector((state) => state.basket);

    useEffect (() => {
        dispatch(getTotals());
    }, [basket, dispatch]);




 return(
  <div className="step-one">
    <h1><strong>Order Summary Receipt</strong></h1>

      <table className="order-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        {basket.basketItems?.map(basketItem => (
        <tbody key={basketItem._id}>
          <tr> 
            <td>{basketItem.name}</td>
            <td>{basketItem.basketQuantity}</td>
            <td>Kshs{basketItem.price}</td>
            <td>  Kshs{basketItem.price * basketItem.basketQuantity}</td>
             
          </tr>
          <tr>
            <td colSpan="3"><strong>Grand Total</strong></td>
            <td><strong> Kshs {JSON.stringify(basket.basketTotalAmount)}</strong></td>
          </tr>
         
        </tbody>
          ))}
      </table>
  
            
            
     
</div>

 );

}