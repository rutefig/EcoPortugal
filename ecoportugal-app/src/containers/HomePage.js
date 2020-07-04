import React, {Component, Fragment} from "react";
import { waste_categories } from "../data/waste_categories";
import CategoryCardList from "../components/CategoryCardList";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
        waste_categories: waste_categories,
        searchfield: '',
    }
  }

  render() {
    return (
      <Fragment>
        <CategoryCardList waste_categories={this.state.waste_categories} />
      </Fragment>
    );
  }
}

export default HomePage;
