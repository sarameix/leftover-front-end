/////////////
// IMPORTS //
/////////////

import { useState, useEffect } from 'react';

////////////////////////
// MY PANTRY FUNCTION //
////////////////////////

const AddRecipe = (props) => {

    ///////////////
    // VARIABLES //
    ///////////////

    ////////////
    // STATES //
    ////////////

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <div className='recipe-container'>
            <a href={props.recipe.url}>
                <img className='recipe-image' src={props.recipe.image} />
            </a>
            <h3>{props.recipe.label}</h3>
            <div className='recipe-description'>
                <p><span className='bold'>Time:</span> {props.recipe.totalTime} Minutes</p>
                <p><span className='bold'>Matching Ingredients:</span> </p>
                <div className='recipe-buttons-container'>
                    <button>+ Add To Recipes</button>
                </div>
            </div>
        </div>
    );
}

////////////
// EXPORT //
////////////

export default AddRecipe;