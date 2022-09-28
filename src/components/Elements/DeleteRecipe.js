/////////////
// IMPORTS //
/////////////

import { useState, useEffect } from 'react';

/////////////////////
// FOOTER FUNCTION //
/////////////////////

const DeleteRecipe = (props) => {

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    // Function to Handle Page When Deleting Item
    const handleDelete = (event) => {
        event.preventDefault();
        props.handleRecipeDelete(props.recipe);
        props.toggleDeleteAlert();
    }

    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <div className='popup-overlay'>
            <div className='popup-container delete-container'>
                <div className='popup-header'>
                    <h3></h3>
                    <button onClick={props.toggleDeleteAlert} className='close-popup-button'>
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
                <h3 className='delete-form-header'>Are you sure you want to delete <span className='delete-item-name'>{props.recipe.name}</span> from your pantry?</h3>
                <form className='popup-form delete-form' onSubmit={handleDelete} >
                    <input className='popup-submit-button' value='Yes' type="submit" />
                    <button onClick={props.toggleDeleteAlert}  className='popup-submit-button'>No</button>
                </form>
            </div>
        </div>
    );
}

////////////
// EXPORT //
////////////

export default DeleteRecipe;