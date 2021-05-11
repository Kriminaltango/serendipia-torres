import React, {useState,useContext}from 'react'
import {ItemCount} from '../ItemCount'
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import './styles.css';


export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0)

    const {addItem} = useContext(CartContext);

    const addHandler = (contador)=>{
        console.log('se agrego un item', contador)
        addItem(item, contador)
        setCount(contador)
    }

    if (!item) return null;

    return <div className="contenedor-item">
            <img src={item?.pictureUrl} alt=""/>
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <div>${item?.price}</div>
            
            <div style={{display:'flex', justifyContent:'center'}}>
            { count === 0  ?
                    <ItemCount stock="6" initial="2" onAdd={addHandler} />
                        :
                        <Link to='/cart' >
                            <button className="btn btn-dark btn-sm">Terminar mi compra</button>
                        </Link> 

            }
            </div>
            
            

  </div>;
   
  }