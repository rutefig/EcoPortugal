import React from "react";
import { CardColumns } from "react-bootstrap";
import CategoryCard from "./CategoryCard";

const CategoryCardList = ({ wasteCategories }) => {
  return (
    <CardColumns className="">
      {
        wasteCategories.map((value, index) => {
          return (
              <CategoryCard
                className="col-6"
                key={index}
                id={wasteCategories[index].id}
                name={wasteCategories[index].name}
              />
          );
        })
      }
    </CardColumns>
  );
}

export default CategoryCardList;
