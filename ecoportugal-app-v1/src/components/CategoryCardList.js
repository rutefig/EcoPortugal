import React from "react";
import {CardColumns} from "react-bootstrap";
import CategoryCard from "./CategoryCard";

const CategoryCardList = ({ waste_types }) => {
    return (
        <CardColumns className="">
            {
                waste_types.map((value, index) => {
                    return (
                        <CategoryCard
                            className="col-6"
                            key={index}
                            id={waste_types[index].id}
                            name={waste_types[index].name}
                            color={waste_types[index].color}
                        />
                    );
                })
            }
        </CardColumns>
    );
}

export default CategoryCardList;