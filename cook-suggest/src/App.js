import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, Switch } from "react-router-dom";
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Body from "./components/body";
import getFoodRecipe from './components/data';

function App() {

  const [ingredients, setIngredients] = useState([])
    const getIngredients = (ingredients) => {
      setIngredients(ingredients)

    }
  return (

    <div className="App">
      <Navbar/>

      <div>
        <div className="Body row">
          <div className="Sidebar col-2 d-flex flex-row justify-content-center">
            <Sidebar returnIngredients={getIngredients} />
          </div>
          <div className="Content col-10 d-flex justify-content-center flex-wrap">
            <Body/>
          </div>
        </div>
        
      </div>
      <button onClick={()=>getFoodRecipe(ingredients)}>Button</button>
    </div>
  );
}

export default App;
