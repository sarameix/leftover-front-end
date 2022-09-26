/////////////
// IMPORTS //
/////////////

import { useNavigate } from "react-router-dom";

///////////////////
// HOME FUNCTION //
///////////////////

const Home = () => {

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
            <div className="home-master-container">
                <div className="overlay"></div>
                <div className="vertical-center">
                    <h1 className="home-header">
                        Leftover
                    </h1>
                    <div className="home-descrip-container">
                        <h3 className="home-descrip">Pantry Tracker and Recipe Suggestions for Busy People</h3>
                    </div>
                    <div className="home-buttons-container">
                        <button className='home-nav-button' value="/Pantry" onClick={handleRouteSwitch}>My Pantry</button>
                        <button className='home-nav-button' value="/Recipes" onClick={handleRouteSwitch}>My Recipes</button>
                    </div>
                </div> 
            </div>
        </>
    );
}

////////////
// EXPORT //
////////////

export default Home;