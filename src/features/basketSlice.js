import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './basketSlice.css';

const initialState = {
    basketItems: localStorage.getItem("basketItems") ?
     JSON.parse(localStorage.getItem("basketItems")) : [],
    basketTotalQuantity: 0,
    basketTotalAmount: 0,
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket(state, action){
            const itemIndex = state.basketItems.findIndex(
                (item) => item._id === action.payload._id);
            if(itemIndex >= 0){
                state.basketItems[itemIndex].basketQuantity += 1
                toast.success(`${action.payload.name} increased in basket`, {
                    position: "bottom-left",
                    theme: "dark",
                });
            } else {
                const tempProduct = {...action.payload, basketQuantity: 1 };
                state.basketItems.push(tempProduct);
                 toast.success(`${action.payload.name} added to basket`, {
                    position: "bottom-left",
                    theme: "colored",
                    
                });
            }

            localStorage.setItem("basketItems", JSON.stringify(state.basketItems));


        },

        removeFromBasket(state, action){
            const nextBasketItems =state.basketItems.filter(
                basketItem => basketItem._id !== action.payload._id
            )

            state.basketItems = nextBasketItems;
            localStorage.setItem("basketItems", JSON.stringify(state.basketItems))
            toast.error(`${action.payload.name} removed from basket`, {
                position: "top-center",
                    theme: "colored",
            })
        },

        decreaseBasket(state, action) {
            const itemIndex = state.basketItems.findIndex(
                basketItem => basketItem._id === action.payload._id
            )

            if(state.basketItems[itemIndex].basketQuantity > 1){
                state.basketItems[itemIndex].basketQuantity -= 1

                toast.warning(`${action.payload.name} reduced from basket`, {
                position: "bottom-left",
                    theme: "colored",
            });
            } else if(state.basketItems[itemIndex].basketQuantity === 1){
                const nextBasketItems =state.basketItems.filter(
                basketItem => basketItem._id !== action.payload._id
            );

            state.basketItems = nextBasketItems;

            
            toast.error(`${action.payload.name} removed from basket`, {
                position: "bottom-left",
                    theme: "dark",
            });
            }
                 
            localStorage.setItem("basketItems", JSON.stringify(state.basketItems))           
            
        },

        clearBasket(state, action) {
            state.basketItems = [];
             toast.error(`Basket Cleared`, {
                position: "top-center",
                    theme: "dark",
            });
            localStorage.setItem("basketItems", JSON.stringify(state.basketItems))
        },

        getTotals(state, action) {
        let { total, quantity } = state.basketItems.reduce(
    (basketTotal, basketItem) => {
      const { price, basketQuantity } = basketItem;
      const itemTotal = price * basketQuantity;

      basketTotal.total += itemTotal;
      basketTotal.quantity += basketQuantity;

      return basketTotal;
    },
    {
      total: 0,
      quantity: 0,
    }
  );

  state.basketTotalQuantity = quantity;
  state.basketTotalAmount = total;

  return state; 
}


        
    },
});

export const { addToBasket, removeFromBasket, decreaseBasket, clearBasket, getTotals } = basketSlice.actions;

export default basketSlice.reducer;

