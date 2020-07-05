import React, {Component, Fragment} from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  let {selectedCategory} = useParams();
  return (
    <Fragment>
      <h1 className="title">{selectedCategory}</h1>
    </Fragment>
  );
}

export default CategoryPage;
