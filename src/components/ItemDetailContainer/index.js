import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'
import { useParams } from 'react-router-dom'


const getItems = (id) => {
    return new Promise((resolve)=>{
        setTimeout (()=>{resolve({
            title:"Cuadro Gato",
            price: 6000,
            description: "Cuadro de un gato colorado realizado con triángulos",
            img:"https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png"

        })},2000)
    })
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const {itemId} = useParams
    useEffect(() => {
        getItems(itemId).then((res)=> setItem(res));
    },)

    return <ItemDetail item={item} />
}

