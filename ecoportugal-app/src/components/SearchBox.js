import React, {Fragment} from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <Fragment>
            <h4>O que é que pretende reciclar?</h4>
            <input
                type="search"
                placeholder='Search'
                onChange={searchChange}
            />
        </Fragment>
    )
}

export default SearchBox;
