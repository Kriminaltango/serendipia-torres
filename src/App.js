import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/index';
import ItemListContainer from "./components/ItemListContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (

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
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
