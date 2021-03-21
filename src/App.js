import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/index';
import ItemListContainer from "./components/ItemListContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer nombre="Coder"/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
