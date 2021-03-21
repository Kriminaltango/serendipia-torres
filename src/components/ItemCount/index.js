import React, { useEffect, useState } from "react";
import './Style.css';

export function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));

  useEffect(() => {
    setCount(parseInt(initial));
    return;
  }, [initial]);

  const addHandle = () => {
    setCount(count + 1);
  };

  const removeHandle = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex-column align-items-strech mx-auto">
      <div className="m-2 p-2 d-flex flex-row justify-content-around align-items-center border-secondary border rounded">
        <button
          disabled={count <= 0}
          className="btn"
          type="button"
          onClick={removeHandle}
        >
         <i class="fas fa-minus fa-2x"></i>
        </button>
        <div className="contador">{count}</div>
        <button
          disabled={count >= stock}
          className="btn"
          type="button"
          onClick={addHandle}
        >
         <i class="fas fa-plus fa-2x"></i>
        </button>
      </div>
      <button
        className="btn btn-dark w-80"
        type="button"
        onClick={onAdd}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;