import React, {Component, Fragment, useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import { useParams } from "react-router-dom";
import PointsList from "../components/PointsList";
import TipsList from "../components/TipsList";

// TODO: Ver como passar para tabs ou assim em mobile

const CategoryPage = () => {
  let {selectedCategory} = useParams();

  const [points, setPoints] = useState([]);
  const [distances, setDistances] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [myLatitude, setMyLatitude] = useState(0);
  const [myLongitude, setMyLongitude] = useState(0);

  // CODE FROM: https://www.geodatasource.com/developers/javascript
  function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
  		return 0;
  	}
  	else {
  		var radlat1 = Math.PI * lat1/180;
  		var radlat2 = Math.PI * lat2/180;
  		var theta = lon1-lon2;
  		var radtheta = Math.PI * theta/180;
  		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  		if (dist > 1) {
  			dist = 1;
  		}
  		dist = Math.acos(dist);
  		dist = dist * 180/Math.PI;
  		dist = dist * 60 * 1.1515;
  		if (unit=="K") { dist = dist * 1.609344 }
  		if (unit=="N") { dist = dist * 0.8684 }
  		return dist;
  	}
  }

  function calculateDistances() {
    let distances_array = [];
    if (myLatitude != 0 && myLongitude !=0) {
      points.map((value, index) => {
        let pointLongitude = points[index].geometry.coordinates[0];
        let pointLatitude = points[index].geometry.coordinates[1];
        distances_array.push(distance(myLatitude, myLongitude, pointLatitude, pointLongitude, "K"));
      });
      setDistances(distances_array);
    }
  }

  // It uses Browser API to get geolocation
  function getMyLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setMyLatitude(position.coords.latitude);
        setMyLongitude(position.coords.longitude);
      });
    }
  }

  // Ver ciclos de vida melhor --- Penso que está a fazer demasiados pedidos à rede
  useEffect(() => {
    getMyLocation();
    // API DAS ECO ILHAS (dados.gov.pt)
    if (selectedCategory == 'Papel' || selectedCategory == 'Plástico' || selectedCategory == 'Vidro') {
      fetch('https://services.arcgis.com/1dSrzEWVQn5kHHyK/arcgis/rest/services/Amb_Reciclagem/FeatureServer/0/query?where=1%3D1&outFields=*&f=pgeojson')
      .then(response => response.json())
      .then(data => {
        setPoints(data.features);
        setIsLoading(false);
        calculateDistances();
      })
      .catch(error => console.log(error))
    }
    else {
      // O QUE FAZER PARA O RESTO - não existem dados disponíveis
    }

    // FALTA AINDA dados para as dicas
  });


  return (
    <Fragment>
      <h1 className="title">{selectedCategory}</h1>
      <Container fluid>
        <Row>
          <Col>
            <PointsList recycling_points={points} />
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
