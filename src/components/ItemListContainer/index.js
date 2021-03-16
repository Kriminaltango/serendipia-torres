  
import React, { Component } from "react";
import { ItemCount } from "../ItemCount";

export const ItemListContainer = (props) => {
  return (
    <div className="container">
      <h3>Hola {props.nombre} éste es tu carrito</h3>
      <ItemCount stock="5" initial="1" />
    </div>
  );
}

export default ItemListContainer;