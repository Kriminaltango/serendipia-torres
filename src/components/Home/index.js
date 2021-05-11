import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';


const Home = () => {
    return (
    <>
  <main>
        <section className="left">
            <div className="product-info">
                <h1>Tarot SteamPunk</h1>
                <p>Una variante diferente para el clásico maso de cartas.</p>
                <h2>$6700</h2>
                <div className="info-btns">
                    <Link className="btn discover-btn" to={'/item/rYdzztsPdTrArogLBqaB'}>más info</Link>
                    <Link className="btn cart-btn" to={'/category/oraculo'}>más Oráculos</Link>
                </div>
            </div>
        </section>
        <section className="right">
            <img src="https://i.pinimg.com/originals/01/c8/17/01c8172a57c2503c5780a5fb70fff076.png" alt=""/>
        </section>
    </main>
</>
      
    );
};

export default Home;

