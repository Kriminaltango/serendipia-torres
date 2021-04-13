import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import {ItemCount} from '../ItemCount'
import {CartContext} from '../../context/CartContext'

export default function ItemDetail({ item }) {
    const [count, setCount] = useState (0)

    const {addItem, cart} = useContext(CartContext);

    const addHandler = (contador) =>{
        console.log('se agregó un item', contador)
        setCount(contador)
    } 

    const terminarCompra = () => {
        addItem(item, count)
    }

    return <>
            
            <img src={item?.img} alt=""/>
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <div>${item?.price}</div>


            {count == 0 ?
                <ItemCount stock="6" initial="2" onAdd={addHandler} />
                    :
                <div>
                    <p>agregaste {count}</p>
                    <Link to={'/cart'}>
                        <button onClick={terminarCompra}>Terminar mi Compra</button>
                    </Link>
                </div>
            }
    </>;

}