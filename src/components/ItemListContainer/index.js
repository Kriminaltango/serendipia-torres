  
import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount";
import {ItemList} from "../ItemList"
import './style.css';


export default function ItemListContainer() {
  const [items, setItems] = useState([])

  useEffect(()=>{

    const prom = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve([
          { id:1, title:"Reno", price:5000, pictureUrl:"https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" },
          { id:2, title:"Loro", price:4500, pictureUrl:"https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg"},
          { id:3, title:"Gato", price:6000, pictureUrl:"https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png" }
        ])
      },2000)
    })

    prom.then((resultado)=>{
      setItems(resultado)
    })

  })

  return (
    <div id="cards_landscape_wrap-2">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <ItemList items={items}/>
            <ItemCount stock="6" initial="2" />
          </div>
        </div>
      </div>
    </div>
  );
}


