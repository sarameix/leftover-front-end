/////////////
// IMPORTS //
/////////////

import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

////////////////
// COMPONENTS //
////////////////

import Home from './components/Routes/Home';
import MyPantry from './components/Routes/MyPantry';
import NewPantry from './components/Routes/NewPantry';
import MyRecipes from './components/Routes/MyRecipes';
import NewRecipe from './components/Routes/NewRecipes';

///////////////////
// ENV VARIABLES //
///////////////////

const API_URL = process.env.REACT_APP_API_URL;

//////////////////
// APP FUNCTION //
//////////////////

const App = () => {

  ////////////
  // STATES //
  ////////////

  const [pantry, setPantry] = useState([]);
  const [recipes, setRecipes] = useState([]);

  /////////////////////
  // AXIOS FUNCTIONS //
  /////////////////////

  // *** PANTRY *** //

  // GET Request and Update Pantry State
  const getPantry = () => {
    axios.get(`${API_URL}/api/ingredients`)
      .then(
        (response) => {
          setPantry(response.data);
        },
        (error) => console.error(error)
      )
      .catch((error) => {
        console.error(error);
      })
  };

  // POST Request and Update Pantry State
  const handlePantryCreate = (newItem) => {
    axios.post(`${API_URL}/api/ingredients`, newItem)
    .then((response) => {
      setPantry([...pantry, response.data]);
    });
  };

  // DELETE Request and Update Pantry State
  const handlePantryDelete = (deletedItem) => {
    axios.delete(`${API_URL}/api/ingredients` + deletedItem.id)
    .then((response) => {
      setPantry(pantry.filter(item => item.id !== deletedItem.id))
    });
  };

  // *** RECIPES *** //

  // GET Request and Update Recipes State
  const getRecipes = () => {
    axios.get(`${API_URL}/api/recipes`)
      .then(
        (response) => {
          setRecipes(response.data);
        },
        (error) => console.error(error)
      )
      .catch((error) => {
        console.error(error);
      })
  };

  // POST Request and Update Recipe State
  const handleRecipeCreate = (newRecipe) => {
    axios.post(`${API_URL}/api/recipes`, newRecipe)
    .then((response) => {
      setRecipes([...recipes, response.data]);
    });
  };

  // DELETE Request and Update Recipe State
  const handleRecipeDelete = (deletedRecipe) => {
    axios.delete(`${API_URL}/api/recipes` + deletedRecipe.id)
    .then((response) => {
      setRecipes(recipes.filter(recipe => recipe.id !== deletedRecipe.id))
    });
  };

  ////////////////
  // USE EFFECT //
  ////////////////

  useEffect(() => {
    getPantry();
    getRecipes();
  }, []);

  ////////////////////////
  // BODY HTML ELEMENTS //
  ////////////////////////

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={ <Home /> } />
            <Route path="Pantry" element={ 
              <MyPantry 
                props={{
                  pantry: pantry,
                  handlePantryCreate: handlePantryCreate,
                  handlePantryDelete: handlePantryDelete
                }}
              />
            } />
            <Route path="Pantry/New" element={ <NewPantry /> } />
            <Route path="Recipes" element={ <MyRecipes /> } />
            <Route path="Recipes/New" element={ <NewRecipe /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

////////////////
// EXPORT APP //
////////////////

export default App;
