import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
    let { selectedCategory } = useParams();
    return <h1>Selected Category: {selectedCategory}</h1>;
}

export default Category