import React from "react";
import CardApp from "./CardApp";
import {CardDeck} from "react-bootstrap";

const CardList = ({ waste_types }) => {

    return (
        <CardDeck>
            {
                waste_types.map((value, index) => {
                    return (
                        <CardApp
                            key={index}
                            id={waste_types[index].id}
                            name={waste_types[index].name}
                        />
                    );
                })
            }
        </CardDeck>
    );
}
export default CardList;
