/////////////
// IMPORTS //
/////////////

import { useState, useEffect } from 'react';
import axios from 'axios';

/////////////////////////
// ADD PANTRY FUNCTION //
/////////////////////////

const AddPantry = (props) => {

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////



    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <div className='popup-overlay'>
            <div className='popup-container'>
                <div className='popup-header'>
                    <h3>Create New Pantry Item</h3>
                    <button onClick={props.toggleCreateAlert} className='close-popup-button'>
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
                <form className='popup-form' onSubmit={props.handleAddFormSubmit} >
                    {
                        (props.newPantry.name === "") ?
                            <>
                                <label htmlFor='name'>Name</label><br />
                                <div className='popup-search-container'>
                                    <input className='popup-search' onChange={props.handleNameChange} type="text" name="name" placeholder='Example: Black Beans' />
                                    <button className='popup-search-button' onClick={props.handleEdamamRequest}>
                                        <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </button><br />
                                </div>
                                {
                                    props.nameOptions.map((option, index) => {
                                        return (
                                            <button onClick={() => props.handleFoodOptionClick(option.food.foodId, option.food.label, option.food.image)} className='food-option-button' key={index}>{option.food.label}</button>
                                        )
                                    })
                                }
                            </>
                        :
                            <div className='popup-selected-name'>
                                <h3>{props.newPantry.name}</h3>
                                <svg
                                    onClick={props.handleFoodOptionRemove}
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
                            </div>
                    }
                    
                    <label htmlFor='quantity'>Quantity</label><br />
                    <input className='popup-input' onChange={props.handleChange} type="text" name="quantity" placeholder='Example: 1 Can' /><br />
                    <label htmlFor='age'>Age</label><br />
                    <input className='popup-input' onChange={props.handleChange} type="text" name="age" placeholder='Example: 3 Weeks' /><br />
                    <input className='popup-submit-button' value='Add Item' type="submit" />
                </form>
            </div>
        </div>
    );
}

////////////
// EXPORT //
////////////

export default AddPantry;