/////////////
// IMPORTS //
/////////////

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

////////////////
// COMPONENTS //
////////////////

import Header from '../Elements/Header';
import Footer from '../Elements/Footer';
import Recipe from '../Elements/Recipe';

/////////////////////////
// MY RECIPES FUNCTION //
/////////////////////////

const MyRecipes = (props) => {

    ///////////////
    // VARIABLES //
    ///////////////

    // Create Navigation Functionality
    const navigate = useNavigate();

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    // Route Switch Function
    const handleRouteSwitch = (event) => {
        navigate(event.target.value);
    }

    ////////////////
    // USE EFFECT //
    ////////////////

    useEffect(() => {
        props.props.getRecipes();
    }, [props.props]);

    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <>
            <Header />
            <main>
                <div className='line'></div>
                <h1>My Recipes</h1>
                <div className='line'></div>
                <button className='add-new-button' value="/Recipes/New" onClick={handleRouteSwitch}>
                    + Add New Recipes
                </button>
                <div className='recipes-container'>
                    {
                        props.props.recipes.map((recipe) => {
                            return (
                                <Recipe key={recipe.id} recipe={recipe} handleRecipeDelete={props.props.handleRecipeDelete} />
                            )
                        })
                    }
                </div>
            </main>
            <Footer />
        </>
    );
}

////////////
// EXPORT //
////////////

export default MyRecipes;