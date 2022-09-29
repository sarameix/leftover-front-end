/////////////
// IMPORTS //
/////////////

import { useState, useEffect } from 'react';

////////////////
// COMPONENTS //
////////////////

import DeleteRecipe from './DeleteRecipe';

//////////////
// FUNCTION //
//////////////

const Recipe = (props) => {

    ///////////////
    // VARIABLES //
    ///////////////

    // Creating Matched Ingredients String
    let matchIngredientString = "";
    for (let i = 0; i < props.recipe.matchedIngredients.length; i++) {
        if (i > 0) {
            matchIngredientString += ", "
        }
        matchIngredientString += props.recipe.matchedIngredients[i];
    }

    // Creating Matched Ingredients String
    let remainIngredientString = "";
    for (let i = 0; i < props.recipe.remainingIngredients.length; i++) {
        if (i > 0) {
            remainIngredientString += ", "
        }
        remainIngredientString += props.recipe.remainingIngredients[i];
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
            <div className='add-recipe-description'>
                <div className='add-recipe-p-container'>
                    <p><span className='bold'>Time:</span> {props.recipe.time} Minutes</p>
                    <p className='ingredients-p'><span className='bold'>Matching Ingredients: </span>{matchIngredientString}</p>
                    <p className='ingredients-p'><span className='bold'>Remaining Ingredients: </span>{remainIngredientString}</p>
                </div>
            </div>
            <div className='add-recipe-buttons-container'>
                <button onClick={toggleDeleteAlert}>Delete</button>
            </div>
        </div>
    );
}

////////////
// EXPORT //
////////////

export default Recipe;