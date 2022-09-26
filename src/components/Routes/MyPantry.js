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
import PantryItem from '../Elements/PantryItem';

////////////////////////
// MY PANTRY FUNCTION //
////////////////////////

const MyPantry = (props) => {

    ///////////////
    // VARIABLES //
    ///////////////

    const pantry = props.props.pantry;

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
                <h1>My Pantry Items</h1>
                <div className='line'></div>
                <button className='add-new-button' value="/Pantry/New" onClick={handleRouteSwitch}>
                    + Add New Items
                </button>
                <div className='pantry-items-container'>
                    {
                        pantry.map((pantryItem) => {
                            return (
                                <PantryItem key={pantryItem.id} pantryItem={pantryItem} />
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

export default MyPantry;