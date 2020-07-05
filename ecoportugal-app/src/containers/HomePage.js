import React, {Component, Fragment} from "react";
import { waste_categories } from "../data/waste_categories";
import CategoryCardList from "../components/CategoryCardList";
import SearchBox from "../components/SearchBox";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
        waste_categories: waste_categories,
        searchfield: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredCategories = this.state.waste_categories.filter(waste_categories => {
      return waste_categories.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
      <Fragment>
        <h1 className="title">Vamos deixar Portugal mais limpo</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CategoryCardList waste_categories={filteredCategories} />
      </Fragment>
    );
  }
}

export default HomePage;
