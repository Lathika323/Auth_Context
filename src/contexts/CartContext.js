import { createContext, useContext, useState } from "react";

//Create a box for cart
const CartContext=createContext();

//Provider function to store & share to other components
export function CartProvider({children}){
    //Global state
    const[cart,setCart]=useState([]);

    //Function to add products in cart
    function addCart(product){
        setCart((prevCart)=> {
            const alreadyInCart=prevCart.some((item)=>item.id===product.id);
            if(alreadyInCart)
                return prevCart;

            return [...prevCart,product];  //else part
        })
    }

    function removeFromCart(id){
        setCart((prevCart)=> prevCart.filter((item)=> item.id!==id));
    }

    return(
        <CartContext.Provider value={{cart,addCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
    return useContext(CartContext);
}