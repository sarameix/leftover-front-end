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

    // Matched Ingredient String
    let matchIngredientString = "";
    for (let i = 0; i < props.recipe.matchedIngredients.length; i++) {
        if (i > 0) {
            matchIngredientString += ", "
        }
        matchIngredientString += props.recipe.matchedIngredients[i];
    }

    // Remaining Ingredient String
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

    const [isClicked, setIsClicked] = useState(false);

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    const toggleIsClicked = () => {
        setIsClicked(!isClicked);
    }

    const handleAddRecipe = (event) => {
        const newRecipe = {
            name: props.recipe.label,
            image: props.recipe.image,
            time: props.recipe.totalTime,
            matchedIngredients: props.recipe.matchedIngredients,
            remainingIngredients: props.recipe.remainingIngredients,
            link: props.recipe.url
        };
        props.handleRecipeCreate(newRecipe);
        toggleIsClicked();
    }

    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <div className='recipe-container'>
            <a href={props.recipe.url}>
                <img className='recipe-image' src={props.recipe.image} />
            </a>
            <h3>{props.recipe.label}</h3>
            <div className='add-recipe-description'>
                <div className='add-recipe-p-container'>
                    <p><span className='bold'>Time:</span> {props.recipe.totalTime} Minutes</p>
                    <p className='ingredients-p'><span className='bold'>Matching Ingredients: </span>{matchIngredientString}</p>
                    <p className='ingredients-p'><span className='bold'>Remaining Ingredients: </span>{remainIngredientString}</p>
                </div>
            </div>
            <div className='add-recipe-buttons-container'>
                {
                    isClicked ?
                        <button className="clicked-recipe-button">
                            Saved!
                        </button>
                    :
                        <button onClick={handleAddRecipe}>
                            + Add To Recipes
                        </button>
                }
            </div>
        </div>
    );
}

////////////
// EXPORT //
////////////

export default AddRecipe;