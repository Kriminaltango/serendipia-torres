import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    const {totalItems} = useContext(CartContext)


    return <>
    {totalItems? <i className="fas fa-shopping-cart nav-link cart-ico fa-lg"></i>: null}
    </>
};

export default CartWidget;