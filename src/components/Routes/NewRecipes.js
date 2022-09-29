/////////////
// IMPORTS //
/////////////

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

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

    // Handle Request to Edamam API
    const handleEdamamRequest = (apiURL) => {
        // Make Axios Request
        axios.get(apiURL)
        .then(
            (response) => {
                setRecipeOptions(response.data.hits);
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
                <div className='add-recipes-container'>
                    {
                        recipeOptions.map((recipe, i) => {
                            return (
                                <AddRecipe key={i} recipe={recipe.recipe} />
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

export default NewRecipes;