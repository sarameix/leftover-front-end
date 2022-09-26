/////////////
// IMPORTS //
/////////////

import { useState } from 'react';
import { useNavigate } from "react-router-dom";

/////////////////////
// HEADER FUNCTION //
/////////////////////

const Header = () => {

    ///////////////////////
    // STATE DECLARATION //
    ///////////////////////

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Create Navigation Functionality
    const navigate = useNavigate();

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    const handleRouteSwitch = (event) => {
        navigate(event.target.value);
    }

    const toggleHamburgerMenu = (event) => {
        setIsMenuOpen(!isMenuOpen);
    }

    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <header>
            <button className='home-button' value="/" onClick={handleRouteSwitch}>Leftover</button>
            <div className='header-hamburger' onClick={toggleHamburgerMenu}>
                {
                    isMenuOpen ?
                    <>
                        <div className='close1'></div>
                        <div className='close2'></div>
                    </>
                    :
                        <>
                            <div className='more'></div>
                            <div className='more'></div>
                            <div className='more'></div>
                        </>

                }
            </div>
            {
                isMenuOpen ?
                    <div className='side-nav-menu'>
                        <button className='header-button' value="/Pantry" onClick={handleRouteSwitch}>My Pantry</button>
                        <div className='hamburger-divider'></div>
                        <button className='header-button' value="/Recipes" onClick={handleRouteSwitch}>My Recipes</button>
                    </div>
                :
                    null
            }
        </header>
    );
}

////////////
// EXPORT //
////////////

export default Header;