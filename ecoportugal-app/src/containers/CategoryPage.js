import React, {Component, Fragment, useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import { useParams } from "react-router-dom";
import PointsList from "../components/PointsList";
import TipsList from "../components/TipsList";

// TODO: Ver como passar para tabs ou assim em mobile

const CategoryPage = () => {
  let {selectedCategory} = useParams();

  const [points, setPoints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://services.arcgis.com/1dSrzEWVQn5kHHyK/arcgis/rest/services/Amb_Reciclagem/FeatureServer/0/query?where=1%3D1&outFields=*&f=pgeojson')
    .then(response => response.json())
    .then(data => {
      setPoints(data.features);
      setIsLoading(false);
    })
    .catch(error => console.log(error))
  });


  return (
    <Fragment>
      <h1 className="title">{selectedCategory}</h1>
      <Container fluid>
        <Row>
          <Col>
            <PointsList recycling_points={points}/>
          </Col>
          <Col>
            <TipsList />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default CategoryPage;
