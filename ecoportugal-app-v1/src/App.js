import React, {Fragment, Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {
    Route,
    Switch,
    useParams
} from "react-router-dom";
import Home from "./containers/Home";
import Category from "./containers/Category";
import NavBar from "./components/NavBar";

class App extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <Container fluid className="bg-secondary">
                    <Switch>
                        <Route path="/:selectedCategory">
                            <Category />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Container>   
            </Fragment>
        );
    }
}



export default App;
