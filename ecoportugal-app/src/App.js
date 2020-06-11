import React, {Fragment} from "react";
import {waste_types} from "./waste_types";
import CardList from "./CardList";
import NavBar from "./NavBar";
import SearchBox from "./SearchBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

const App = () => {
    return (
        <Fragment>
            <NavBar />
            <h2>Vamos deixar Portugal mais limpo</h2>
            <SearchBox />
            <Container>
                <CardList waste_types={waste_types}/>
            </Container>
        </Fragment>
    );
}

export default App;
