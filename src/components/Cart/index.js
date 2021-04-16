import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";

export const Cart = () => {

    const { cart, removeItem, totalItems, totalPrecio} = useContext(CartContext)


    return (
        <div>
            {
            !cart.length ?
            <h2>No hay Items en el Carrito <Link to='/'>Ir al Home</Link></h2>
            : (<>
                {cart.map(cartItem => (
                <div key={cartItem.item.id} >
                    <div> Titulo: {cartItem.item.title} </div>
                    <div> cantidad: {cartItem.quantity} </div>
                    <button onClick={()=> removeItem(cartItem.item.id)}>borrar</button>
                </div>)
                )}
                <div>Total:{totalItems} artículos. $ {totalPrecio}</div>
                </>
            )
            }
        </div>
    )
}