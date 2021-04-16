import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import {ItemCount} from '../ItemCount'
import {CartContext} from '../../context/CartContext'

export default function ItemDetail({ item }) {
    const [count, setCount] = useState (0)

    const {addItem} = useContext(CartContext);

    const onAdd = (quantityToAdd) => {
        const qty = parseInt(quantityToAdd)
        console.log('se agregó un item', qty);
        addItem(item, qty)

        setCount(qty)
    }

    return <>
            


            {count === 0 ?
                <ItemCount stock="6" initial="2" onAdd={onAdd} />
                    :
                <div>
                    <p>agregaste {count}</p>
                    <Link to={'/cart'}>
                        <button>Terminar mi Compra</button>
                    </Link>
                </div>
            }
    </>;

}