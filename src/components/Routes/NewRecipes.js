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

//////////////////////////
// NEW RECIPES FUNCTION //
//////////////////////////

const NewRecipes = () => {

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
                <h1>Add New Recipes</h1>
                <div className='line'></div>
            </main>
            <Footer />
        </>
    );
}

////////////
// EXPORT //
////////////

export default NewRecipes;