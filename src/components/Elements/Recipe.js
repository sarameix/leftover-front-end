/////////////
// IMPORTS //
/////////////

import { useState, useEffect } from 'react';

////////////////
// COMPONENTS //
////////////////

import DeleteRecipe from './DeleteRecipe';

////////////////////////
// MY PANTRY FUNCTION //
////////////////////////

const Recipe = (props) => {

    ///////////////
    // VARIABLES //
    ///////////////

    let ingredientString = "";
    for (let i = 0; i < props.recipe.matchedIngredients.length; i++) {
        if (i > 0) {
            ingredientString += ", "
        }
        ingredientString += props.recipe.matchedIngredients[i];
    }

    ////////////
    // STATES //
    ////////////

    const [showDelete, setShowDelete] = useState(false);

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    // Toggle Delete Alert
    const toggleDeleteAlert = () => {
        setShowDelete(!showDelete);
    }

    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <div className='recipe-container'>
            {
                showDelete ? 
                    <DeleteRecipe recipe={props.recipe} handleRecipeDelete={props.handleRecipeDelete} showDelete={showDelete} toggleDeleteAlert={toggleDeleteAlert} />
                :
                    null
            }
            <a href={props.recipe.link}>
                <img className='recipe-image' src={props.recipe.image} />
            </a>
            <h3>{props.recipe.name}</h3>
            <div className='recipe-description'>
                <p><span className='bold'>Time:</span> {props.recipe.time} Minutes</p>
                <p><span className='bold'>Matching Ingredients:</span> {ingredientString}</p>
                <div className='recipe-buttons-container'>
                    <button onClick={toggleDeleteAlert}>Delete</button>
                </div>
            </div>
        </div>
    );
}

////////////
// EXPORT //
////////////

export default Recipe;