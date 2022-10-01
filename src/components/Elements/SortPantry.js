/////////////
// IMPORTS //
/////////////

import { useState } from 'react';
import axios from 'axios';

//////////////
// FUNCTION //
//////////////

const SortPantry = (props) => {

    ////////////////
    // VARIABLES  //
    ////////////////

    //////////////////////
    // HELPER FUNCTIONS //
    //////////////////////

    ////////////////////////
    // BODY HTML ELEMENTS //
    ////////////////////////

    return (
        <form className="inline-form sort-form">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text sort-label" htmlFor="inputGroupSelect01">Sort By</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" name="sortBy" defaultValue="mostRecent">
                    <option value="mostRecent">Most Recent</option>
                    <option value="alphabetical">Alphabetical</option>
                    <option value="age">Age</option>
                </select>
            </div>
        </form>
    );
}

////////////
// EXPORT //
////////////

export default SortPantry