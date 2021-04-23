import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/index';
import ItemListContainer from "./components/ItemListContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {CartProvider} from './context/CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          Prueba
        </Route>
      </Switch>
      <Switch>
        <Route path="/Shop">
          <ItemListContainer nombre="Coder"/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/category/:categoryId">
          <ItemListContainer />
        </Route>
      </Switch>
      <Switch>
        <Route path="/item/:itemId">
          <ItemDetailContainer />
        </Route>
      </Switch>
      <Switch>
        <Route path="/Nosotros">
          Nosotros
        </Route>
          <Route path="/cart">
          <h2>Carrito de Compras</h2>
          <Cart />
        </Route>
      </Switch>
     
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;

