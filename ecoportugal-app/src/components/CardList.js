import React from "react";
import CardApp from "./CardApp";
import {CardColumns} from "react-bootstrap";

const CardList = ({ waste_types }) => {

    return (
        <CardColumns className="">
            {
                waste_types.map((value, index) => {
                    return (
                        <CardApp
                            className="col-6"
                            key={index}
                            id={waste_types[index].id}
                            name={waste_types[index].name}
                        />
                    );
                })
            }
        </CardColumns>
    );
}
export default CardList;
