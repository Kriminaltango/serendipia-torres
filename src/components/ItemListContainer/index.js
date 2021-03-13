  
import React from "react";
import { ItemCount } from "../ItemCount";

export default function ItemListContainer() {
  return (
    <div className="container">
      <h3>Tu carrito</h3>
      <ItemCount stock="5" initial="1" />
    </div>
  );
}