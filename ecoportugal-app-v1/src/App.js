import React, {Fragment} from 'react';
import './App.css';
import {
    Route,
    Switch,
    useParams
} from "react-router-dom";
import Home from "./containers/Home";

function App() {
    return (
        <Fragment>
            <Switch>
                <Route path="/:selectedCategory">
                    <Category />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Fragment>
    );
}

function Category() {
    let { selectedCategory } = useParams();
    return <h1>Selected Category: {selectedCategory}</h1>;
}

export default App;
