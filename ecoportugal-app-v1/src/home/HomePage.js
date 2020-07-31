import React, { useState } from "react";
import { waste_types } from "../data/waste_types";
import CategoryCardList from "./CategoryCardList";
import SearchBox from "./SearchBox";

const HomePage = () => {
  const [wasteCategories, setWasteCategories] = useState(waste_types);
  const [searchfield, setSearchfield] = useState('');

  const filteredCategories = wasteCategories.filter(wasteCategories => {
    return wasteCategories.keywords.toLowerCase().includes(searchfield.toLowerCase());
  });

  function onSearchChange(event) {
    setSearchfield(event.target.value);
  }

  return (
    <>
      <h1 className="title">Vamos deixar Portugal mais limpo</h1>
      <SearchBox searchChange={onSearchChange} />
      <CategoryCardList wasteCategories={filteredCategories} />
    </>
  );
}

export default HomePage;
