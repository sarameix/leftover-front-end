/////////////
// IMPORTS //
/////////////

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner';

////////////////
// COMPONENTS //
////////////////

import Header from '../Elements/Header';
import Footer from '../Elements/Footer';
import AddRecipe from '../Elements/AddRecipe';

//////////////////////////
// NEW RECIPES FUNCTION //
//////////////////////////

const NewRecipes = (props) => {

    ///////////////////
    // ENV VARIABLES //
    ///////////////////

    const EDAMAM_URL = process.env.REACT_APP_EDAMAM_URL;
    const EDAMAM_ID = process.env.REACT_APP_EDAMAM_RECIPE_ID;
    const EDAMAM_KEY = process.env.REACT_APP_EDAMAM_RECIPE_KEY;

    ///////////////
    // VARIABLES //
    ///////////////

    // Create Navigation Functionality
    const navigate = useNavigate();

    // Empty Recipe Variable
    let emptyRecipe = {
        name: "",
        image: "",
        time: "",
        quantity: ""
    };

    ////////////
    // STATES //
    ////////////

    const [newRecipe, setNewRecipe] = useState(emptyRecipe);
    const [recipeOptions, setRecipeOptions] = useState([]);
    const [isFetchingNewRecipes, setIsFetchingNewRecipes] = useState(false);

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    // Route Switch Function
    const handleRouteSwitch = (event) => {
        navigate(event.target.value);
    }

    // Get Name Queries Function
    const getNameQueries = (pantry) => {
        // Initialize Query String
        let queries = "";

        // Loop Through Ingredients
        for (let i = 0; i < pantry.length; i++) {

            // If Multiple Queries
            if (i !== 0) {
                queries += "%20";
            }
            
            // If Multiple Words in Name
            if (pantry[i].name.split(" ").length > 1) {
                queries += pantry[i].name.split(" ").join("%20");
            } else {
                queries += pantry[i].name;
            }            
        }

        // Return Queries
        return queries;
    }

    // Add Ingredient Properties
    const addIngredientProps = (recipe, pantry) => {
        // Initialize Ingredient Arrays
        const matchedIngredients = [];
        const remainingIngredients = [];

        // Loop Through Ingredients
        for (let i = 0; i < recipe.recipe.ingredients.length; i++) {

            // Declare Variables
            let isInRecipe = false;
            let name = recipe.recipe.ingredients[i].food;

            // Loop Through Pantry to Determine if in Recipe
            for (let j = 0; j < pantry.length; j++) {
                if ((recipe.recipe.ingredients[i].foodId === pantry[j].foodID)) {
                    isInRecipe = true;
                    name = pantry[j].name;
                }
            }

            // Put in Matches or Remaining Based on Boolean
            if (isInRecipe) {
                matchedIngredients.push(name);
            } else {
                remainingIngredients.push(name);
            }
        }
    
        // Add Properties to Recipe Object
        recipe.recipe.matchedIngredients = matchedIngredients;
        recipe.recipe.remainingIngredients = remainingIngredients;

        // Return Modified Object
        return recipe;
    }

    // Remove Bad Recipes from Array
    const removeDuds = (recipes) => {
        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].recipe.totalTime === 0) {
                recipes.splice(i, 1);
            }
        }
        return recipes;
    }

    // Handle Request to Edamam API
    const handleEdamamRequest = (apiURL) => {
        // Show Spinner
        setIsFetchingNewRecipes(true);

        // Make Axios Request
        axios.get(apiURL)
        .then(
            (response) => {
                // Add Ingredient Properties
                for (let i = 0; i < response.data.hits.length; i++) {
                    response.data.hits[i] = addIngredientProps(response.data.hits[i], props.props.pantry);
                }

                // Set Recipe Options
                setRecipeOptions(removeDuds(response.data.hits));

                // Hide Spinner
                setIsFetchingNewRecipes(false); 
            },
            (error) => console.error(error)
        )
        .catch((error) => {
            console.error(error);
        });
    }

    ////////////////
    // USE EFFECT //
    ////////////////

    useEffect(() => {
        // Get Name Queries on Load
        const nameQueries = getNameQueries(props.props.pantry);

        // Make API Call on Load
        handleEdamamRequest(EDAMAM_URL + "api/recipes/v2?type=public&q=" + nameQueries + "&app_id=" + EDAMAM_ID + "&app_key=" + EDAMAM_KEY);
        
    }, [props.props]);

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
                {
                    isFetchingNewRecipes ? 
                        <div className='spinner'>
                            <ColorRing
                                visible={true}
                                height='200'
                                width='200'
                                ariaLabel='blocks-loading'
                                wrapperStyle={{}}
                                wrapperClass='blocks-wrapper'
                                colors={['#E6A00B', '#F0900C', '#D85E00', '#F04D0C', '#E62A0B']} />
                        </div>
                    :
                        <div className='add-recipes-container'>
                            {
                                recipeOptions.map((recipe, i) => {
                                    return (
                                        recipe.recipe.matchedIngredients.length > 0 ?
                                            <AddRecipe key={i} handleRecipeCreate={props.props.handleRecipeCreate} recipe={recipe.recipe} />
                                        :
                                            null
                                        )
                                })
                            }
                        </div>
                }
            </main>
            <Footer />
        </>
    );
}

////////////
// EXPORT //
////////////

export default NewRecipes;