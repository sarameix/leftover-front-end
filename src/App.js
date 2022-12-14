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
  const [isFetchingPantry, setIsFetchingPantry] = useState(false);
  const [isFetchingRecipes, setIsFetchingRecipes] = useState(false);  

  /////////////////////
  // AXIOS FUNCTIONS //
  /////////////////////

  // *** PANTRY *** //

  // GET Request and Update Pantry State
  const getPantry = () => {
    setIsFetchingPantry(true);
    axios.get(`${API_URL}/api/ingredients`)
      .then(
        (response) => {
          setIsFetchingPantry(false);
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
    axios.delete(`${API_URL}/api/ingredients/` + deletedItem._id)
    .then((response) => {
      setPantry(pantry.filter(item => item._id !== deletedItem._id))
    });
  };

  // PUT Request and Update Pantry State
  const handlePantryUpdate = (editItem) => {
    axios.put(`${API_URL}/api/ingredients/` + editItem._id, editItem)
    .then((response) => {
      getPantry();
    })
  }

  // *** RECIPES *** //

  // GET Request and Update Recipes State
  const getRecipes = () => {
    setIsFetchingRecipes(true);
    axios.get(`${API_URL}/api/recipes`)
      .then(
        (response) => {
          setRecipes(response.data);
          setIsFetchingRecipes(false);
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
    axios.delete(`${API_URL}/api/recipes/` + deletedRecipe._id)
    .then((response) => {
      setRecipes(recipes.filter(recipe => recipe._id !== deletedRecipe._id))
    });
  };

  // PUT Request and Update Recipe State
  const handleRecipeUpdate = (editRecipe) => {
    axios.put(`${API_URL}/api/recipes/` + editRecipe._id, editRecipe)
    .then((response) => {
      getRecipes();
    })
  }

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
                  recipes: recipes,
                  setPantry: setPantry,
                  getPantry: getPantry,
                  handlePantryCreate: handlePantryCreate,
                  handlePantryDelete: handlePantryDelete,
                  handlePantryUpdate: handlePantryUpdate,
                  handleRecipeUpdate: handleRecipeUpdate,
                  isFetchingPantry: isFetchingPantry
                }}
              />
            } />
            <Route path="Recipes" element={
              <MyRecipes
                props={{
                  recipes: recipes,
                  getRecipes: getRecipes,
                  handleRecipeDelete: handleRecipeDelete,
                  isFetchingRecipes: isFetchingRecipes
                }}
              />
            } />
            <Route path="Recipes/New" element={
              <NewRecipe
                props={{
                  pantry: pantry,
                  recipes: recipes,
                  getRecipes: getRecipes,
                  handleRecipeCreate: handleRecipeCreate
                }}
              />
            } />
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
