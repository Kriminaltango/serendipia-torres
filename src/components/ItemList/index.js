import React from 'react';
import { Item } from '../Item';


export const ItemList = ({items=[]})=>{

    return (
        <div className="row">
            {items.map( elemento => <Item item={elemento} /> )}
        </div>
    )
}

export default ItemList