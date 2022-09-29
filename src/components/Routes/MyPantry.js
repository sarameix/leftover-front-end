/////////////
// IMPORTS //
/////////////

import { useState, useEffect } from 'react';
import axios from 'axios';

////////////////
// COMPONENTS //
////////////////

import Header from '../Elements/Header';
import Footer from '../Elements/Footer';
import PantryItem from '../Elements/PantryItem';
import AddPantry from '../Elements/AddPantry';

////////////////////////
// MY PANTRY FUNCTION //
////////////////////////

const MyPantry = (props) => {

    ///////////////////
    // ENV VARIABLES //
    ///////////////////

    const EDAMAM_URL = process.env.REACT_APP_EDAMAM_URL;
    const EDAMAM_ID = process.env.REACT_APP_EDAMAM_INGR_ID;
    const EDAMAM_KEY = process.env.REACT_APP_EDAMAM_INGR_KEY;

    ///////////////
    // VARIABLES //
    ///////////////

    let emptyPantryItem = {
        foodID: "",
        name: "",
        image: "",
        age: "",
        quantity: ""
    };

    ////////////
    // STATES //
    ////////////

    const [showAdd, setShowAdd] = useState(false);
    const [newPantry, setNewPantry] = useState(emptyPantryItem);
    const [nameQuery, setNameQuery] = useState("");
    const [nameOptions, setNameOptions] = useState([]);

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    // Toggle Create Alert
    const toggleCreateAlert = () => {
        setShowAdd(!showAdd);
        setNameQuery("");
        setNameOptions([]);
    }

    // Function to Handle Change in Add Form
    const handleChange = (event) => {
        setNewPantry({ ...newPantry, [event.target.name]: event.target.value });
    }

    // Function to Handle Change in Add Name
    const handleNameChange = (event) => {
        setNameQuery(event.target.value);
    }

    // Update All Recipes When Ingredient Added
    const updateRecipesOnAdd = (newPantry) => {
        // Store Recipes in Variable
        const newRecipes = props.props.recipes;

        // Loop Through Recipes Array
        for (let i = 0; i < newRecipes.length; i++) {
            // Declare Variables for Matching
            let isMatch = false;
            let targetIndex = -1;

            // If Match, Store True and Target Index
            for (let j = 0; j < newRecipes[i].remainingIngredients.length; j++) {
                if (newRecipes[i].remainingIngredients[j].toLowerCase() === newPantry.name.toLowerCase()) {
                    isMatch = true;
                    targetIndex = j;
                }
            }

            // Update Recipe Ingredients if Match
            if (isMatch) {
                newRecipes[i].remainingIngredients.splice(targetIndex, 1);
                newRecipes[i].matchedIngredients.push(newPantry.name);
                props.props.handleRecipeUpdate(newRecipes[i]);
            }
        }
    }

    // Handle Submitting Add Alert
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        props.props.handlePantryCreate(newPantry);
        updateRecipesOnAdd(newPantry);
        toggleCreateAlert();
        setNewPantry(emptyPantryItem);
        setNameQuery("");
        setNameOptions([]);
    }

    // Handle Request to Edamam API
    const handleEdamamRequest = (event) => {
        // Prevent Default Submit
        event.preventDefault();

        // Put Together API URL
        let apiURL = EDAMAM_URL + "api/food-database/v2/parser?app_id=" + EDAMAM_ID + "&app_key=" + EDAMAM_KEY + "&ingr=" + nameQuery + "&nutrition-type=cooking";

        // Make Axios Request
        axios.get(apiURL)
        .then(
            (response) => {
                setNameOptions(response.data.hints);
                console.log(response.data.hints)
            },
            (error) => console.error(error)
        )
        .catch((error) => {
            console.error(error);
        });
    }

    // Function to Handle Clicking Food Option
    const handleFoodOptionClick = (foodID, foodName, foodImage) => {
        setNewPantry({ ...newPantry, ["foodID"]: foodID, ["name"]: foodName, ["image"]: foodImage });
        setNameQuery("");
        setNameOptions([]);
    }

    // Function to Handle Clicking Food Option
    const handleFoodOptionRemove = () => {
        setNewPantry({ ...newPantry, ["foodID"]: "", ["name"]: "", ["image"]: "" });
        setNameQuery("");
        setNameOptions([]);
    }

    ////////////////
    // USE EFFECT //
    ////////////////

    useEffect(() => {
        props.props.getPantry();
    }, [props.props]);

    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <>
            <Header />
            <main>
                <div className='line'></div>
                <h1>My Pantry Items</h1>
                <div className='line'></div>
                <button className='add-new-button' value="/Pantry/New" onClick={toggleCreateAlert}>
                    + Add New Items
                </button>
                <div className='pantry-items-container'>
                    {
                        props.props.pantry.map((pantryItem) => {
                            return (
                                <PantryItem key={pantryItem.id} pantryItem={pantryItem} handlePantryDelete={props.props.handlePantryDelete} handlePantryUpdate={props.props.handlePantryUpdate} recipes={props.props.recipes} handleRecipeUpdate={props.props.handleRecipeUpdate} />
                            )
                        })
                    }
                </div>
                {
                    showAdd ?
                        <AddPantry toggleCreateAlert={toggleCreateAlert} handleAddFormSubmit={handleAddFormSubmit} handleNameChange={handleNameChange} handleEdamamRequest={handleEdamamRequest} handleChange={handleChange} nameOptions={nameOptions} handleFoodOptionClick={handleFoodOptionClick} handleFoodOptionRemove={handleFoodOptionRemove} newPantry={newPantry} />
                    :
                        null
                }
            </main>
            <Footer />
        </>
    );
}

////////////
// EXPORT //
////////////

export default MyPantry;