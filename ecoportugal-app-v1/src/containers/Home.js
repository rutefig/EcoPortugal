import React, {Component, Fragment} from "react";

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Fragment>
                <h1>Home Page</h1>
                <a href="/bananas">bananas</a><br/>
                <a href="/sacos">sacos</a>
            </Fragment>
        );
    }
}

export default Home;
