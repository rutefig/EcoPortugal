import React, {Fragment, Component} from "react";
import {waste_types} from "../waste_types";
import CardList from "../components/CardList";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    constructor() {
        super()
        this.state = {
            waste_types: waste_types,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredWastes = this.state.waste_types.filter(waste_types => {
            return waste_types.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <Fragment>
                <NavBar />
                <Switch>
                    <Route path="/">
                        <h2>Vamos deixar Portugal mais limpo</h2>
                        <SearchBox searchChange={this.onSearchChange} />
                        <Container>
                            <CardList waste_types={filteredWastes}/>
                        </Container>
                    </Route>
                </Switch>
            </Fragment>
        );
    }

}

export default App;
