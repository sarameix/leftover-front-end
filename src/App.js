/////////////
// IMPORTS //
/////////////

import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

////////////////
// COMPONENTS //
////////////////

import Home from './components/Routes/Home';
import MyPantry from './components/Routes/MyPantry';
import NewPantry from './components/Routes/NewPantry';
import MyRecipes from './components/Routes/MyRecipes';
import NewRecipe from './components/Routes/NewRecipes';

//////////////////
// APP FUNCTION //
//////////////////

const App = () => {

  ////////////
  // STATES //
  ////////////

  ////////////////////////
  // BODY HTML ELEMENTS //
  ////////////////////////

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={ <Home /> } />
            <Route path="Pantry" element={ <MyPantry /> } />
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
