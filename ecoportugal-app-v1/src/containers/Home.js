import React, {Component, Fragment} from "react";
import { waste_types } from "../data/waste_types";
import CategoryCardList from "../components/CategoryCardList";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            waste_types: waste_types,
            searchfield: '',
        }
    }

    render() {
        return (
            <Fragment>
                <h2 className="text-center text-white">Vamos deixar Portugal mais limpo</h2>
                <CategoryCardList waste_types={this.state.waste_types}/>
            </Fragment>
        );
    }
}

export default Home;
