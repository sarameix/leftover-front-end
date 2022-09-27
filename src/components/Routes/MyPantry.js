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
    const EDAMAM_ID = process.env.REACT_APP_EDAMAM_ID;
    const EDAMAM_KEY = process.env.REACT_APP_EDAMAM_KEY;

    ///////////////
    // VARIABLES //
    ///////////////

    const pantry = props.props.pantry;
    const navigate = useNavigate();
    let emptyPantryItem = {
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

    // Switch Routes
    const handleRouteSwitch = (event) => {
        navigate(event.target.value);
    }

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

    // Handle Submitting Add Alert
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        props.props.handlePantryCreate(newPantry);
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
            },
            (error) => console.error(error)
        )
        .catch((error) => {
            console.error(error);
        });
    }

    // Function to Handle Clicking Food Option
    const handleFoodOptionClick = (foodName, foodImage) => {
        setNewPantry({ ...newPantry, ["name"]: foodName, ["image"]: foodImage });
        setNameQuery("");
        setNameOptions([]);
    }

    // Function to Handle Clicking Food Option
    const handleFoodOptionRemove = () => {
        setNewPantry({ ...newPantry, ["name"]: "", ["image"]: "" });
        setNameQuery("");
        setNameOptions([]);
    }

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
                        pantry.map((pantryItem) => {
                            return (
                                <PantryItem key={pantryItem.id} pantryItem={pantryItem} handlePantryDelete={props.props.handlePantryDelete} handlePantryUpdate={props.props.handlePantryUpdate} />
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