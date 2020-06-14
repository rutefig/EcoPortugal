import React, {Fragment, Component} from "react";
import {waste_types} from "./waste_types";
import CardList from "./CardList";
import NavBar from "./NavBar";
import SearchBox from "./SearchBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

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
                <h2>Vamos deixar Portugal mais limpo</h2>
                <SearchBox searchChange={this.onSearchChange} />
                <Container>
                    <CardList waste_types={filteredWastes}/>
                </Container>
            </Fragment>
        );
    }
}

export default App;
