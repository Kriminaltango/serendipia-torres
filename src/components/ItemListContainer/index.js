  
import React, { useEffect, useState } from "react";
import {ItemList} from "../ItemList";
import './style.css';
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";



export default function ItemListContainer() {
  const [items, setItems] = useState([])

  const {categoryId} = useParams()

  useEffect(()=>{

    const db = getFirestore();
    const itemsCollection = db.collection('items') 
    const filtrado = itemsCollection
       .where('categoryId','==', categoryId).limit(2)
    const prom =  filtrado.get();


    prom.then((snaptshot)=>{
      console.log('datos consultados');
      console.log(snaptshot);

      if(snaptshot.size > 0){
        console.log(snaptshot.docs.map(doc => doc.data()))

        console.log(snaptshot.docs.map(doc => doc.id))


        setItems(snaptshot.docs.map(doc => {
          return {id:doc.id,  ...doc.data()}
        }
          ))
      }

    })

  },[categoryId])
    

  return (
    <div id="cards_landscape_wrap-2">
    Items de la categoría {categoryId}
      <div className="container">
            <ItemList items={items}/>
      </div>
    </div>
  )
}