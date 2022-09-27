/////////////
// IMPORTS //
/////////////

import { useState, useEffect } from 'react';

/////////////////////
// FOOTER FUNCTION //
/////////////////////

const EditPantry = (props) => {

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    // Function to Handle Page When Editing Item
    const handleEdit = (event) => {
        // Prevent Refreshing Page
        event.preventDefault();

        // Make Updated Pantry Item With Input
        const updatedItem = {
            id: event.target.id.value,
            name: event.target.name.value,
            image: event.target.image.value,
            quantity: event.target.quantity.value,
            age: event.target.age.value
        }
        console.log(updatedItem);

        // Update Item and Hide Alert
        props.handlePantryUpdate(updatedItem);
        props.toggleEditAlert();
    }

    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <div className='popup-overlay'>
            <div className='popup-container edit-container'>
                <div className='popup-header'>
                    <h3>Edit {props.pantryItem.name}</h3>
                    <button onClick={props.toggleEditAlert} className='close-popup-button'>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.3956 7.75734C16.7862 8.14786 16.7862 8.78103 16.3956 9.17155L13.4142 12.153L16.0896 14.8284C16.4802 15.2189 16.4802 15.8521 16.0896 16.2426C15.6991 16.6331 15.0659 16.6331 14.6754 16.2426L12 13.5672L9.32458 16.2426C8.93405 16.6331 8.30089 16.6331 7.91036 16.2426C7.51984 15.8521 7.51984 15.2189 7.91036 14.8284L10.5858 12.153L7.60436 9.17155C7.21383 8.78103 7.21383 8.14786 7.60436 7.75734C7.99488 7.36681 8.62805 7.36681 9.01857 7.75734L12 10.7388L14.9814 7.75734C15.372 7.36681 16.0051 7.36681 16.3956 7.75734Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
                <div className='popup-selected-name edit-name'>
                    <h3>{props.pantryItem.name}</h3>
                </div>
                <form className='popup-form edit-form' onSubmit={handleEdit} >
                    <input type="hidden" value={props.pantryItem.id} name="id" />
                    <input type="hidden" value={props.pantryItem.name} name="name" />
                    <input type="hidden" value={props.pantryItem.image} name="image" />
                    <label htmlFor='quantity'>Quantity</label><br />
                    <input className='popup-input' type="text" name="quantity" placeholder='Example: 1 Can' defaultValue={props.pantryItem.quantity} /><br />
                    <label htmlFor='age'>Age</label><br />
                    <input className='popup-input' type="text" name="age" placeholder='Example: 3 Weeks' defaultValue={props.pantryItem.age} /><br />
                    <input className='popup-submit-button' value='Submit' type="submit" />
                </form>
            </div>
        </div>
    );
}

////////////
// EXPORT //
////////////

export default EditPantry;