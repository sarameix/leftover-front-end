/////////////
// IMPORTS //
/////////////

import { useState, useEffect } from 'react';

////////////////
// COMPONENTS //
////////////////

////////////////////////
// MY PANTRY FUNCTION //
////////////////////////

const PantryItem = (props) => {

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////



    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <div className='pantry-item-container'>
            <img src={props.pantryItem.image} />
            <h3>{props.pantryItem.name}</h3>
            <div className='pantry-description'>
                <p>Quantity: {props.pantryItem.quantity}</p>
                <p>Age: {props.pantryItem.age}</p>
                <div className='pantry-buttons-container'>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
}

////////////
// EXPORT //
////////////

export default PantryItem;