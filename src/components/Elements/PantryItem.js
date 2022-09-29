/////////////
// IMPORTS //
/////////////

import { useState, useEffect } from 'react';

////////////////
// COMPONENTS //
////////////////

import DeletePantry from './DeletePantry';
import EditPantry from './EditPantry';

//////////////
// FUNCTION //
//////////////

const PantryItem = (props) => {

    ////////////
    // STATES //
    ////////////

    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    // Toggle Delete Alert
    const toggleDeleteAlert = () => {
        setShowDelete(!showDelete);
    }

    // Toggle Edit Alert
    const toggleEditAlert = () => {
        setShowEdit(!showEdit);
    }

    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <div className='pantry-item-container'>
            {
                showDelete ? 
                    <DeletePantry pantryItem={props.pantryItem} handlePantryDelete={props.handlePantryDelete} showDelete={showDelete} toggleDeleteAlert={toggleDeleteAlert} recipes={props.recipes} handleRecipeUpdate={props.handleRecipeUpdate} />
                :
                    null
            }
            {
                showEdit ?
                    <EditPantry pantryItem={props.pantryItem} handlePantryUpdate={props.handlePantryUpdate} showEdit={showEdit} toggleEditAlert={toggleEditAlert} />
                :
                    null
            }
            <img src={props.pantryItem.image} />
            <h3>{props.pantryItem.name}</h3>
            <div className='pantry-description'>
                <p>Quantity: {props.pantryItem.quantity}</p>
                <p>Age: {props.pantryItem.age}</p>
                <div className='pantry-buttons-container'>
                    <button onClick={toggleEditAlert}>Edit</button>
                    <button onClick={toggleDeleteAlert}>Delete</button>
                </div>
            </div>
        </div>
    );
}

////////////
// EXPORT //
////////////

export default PantryItem;