/////////////
// IMPORTS //
/////////////

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ColorRing } from 'react-loader-spinner';

////////////////
// COMPONENTS //
////////////////

import Header from '../Elements/Header';
import Footer from '../Elements/Footer';
import Recipe from '../Elements/Recipe';

/////////////////////////
// MY RECIPES FUNCTION //
/////////////////////////

const MyRecipes = (props) => {

    ///////////////
    // VARIABLES //
    ///////////////

    // Create Navigation Functionality
    const navigate = useNavigate();

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    // Route Switch Function
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
                <h1>My Recipes</h1>
                <div className='line'></div>
                <div className='page-buttons-container'>
                    <button className='add-new-button' value="/Recipes/New" onClick={handleRouteSwitch}>
                        + Add New Recipes
                    </button>
                </div>
                {
                    props.props.isFetchingRecipes ?
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
                        <div className='recipes-container'>
                            {
                                props.props.recipes.map((recipe) => {
                                    return (
                                        <Recipe key={recipe.id} recipe={recipe} handleRecipeDelete={props.props.handleRecipeDelete} />
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

export default MyRecipes;