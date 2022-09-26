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

/////////////////////////
// MY RECIPES FUNCTION //
/////////////////////////

const MyRecipes = () => {

    // Create Navigation Functionality
    const navigate = useNavigate();

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    const handleRouteSwitch = (event) => {
        navigate(event.target.value);
    }

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
            </main>
            <Footer />
        </>
    );
}

////////////
// EXPORT //
////////////

export default MyRecipes;