import React from "react";
import {CardColumns} from "react-bootstrap";
import CategoryCard from "./CategoryCard";

const CategoryCardList = ({ waste_categories }) => {
    return (
        <CardColumns className="">
            {
                waste_categories.map((value, index) => {
                    return (
                        <CategoryCard
                            className="col-6"
                            key={index}
                            id={waste_categories[index].id}
                            name={waste_categories[index].name}
                            color={waste_categories[index].color}
                        />
                    );
                })
            }
        </CardColumns>
    );
}

export default CategoryCardList;
