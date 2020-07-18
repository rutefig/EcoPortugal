import React, { useState, useEffect } from "react";
import { Container, CardColumns, Button, Modal } from "react-bootstrap";
import PointCard from "./PointCard";

const PointsList = ({ location, category }) => {
  const [recyclePoints, setRecyclePoints] = useState([]);
  const [distances, setDistances] = useState([]);

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
    recyclePoints.map((value, index) => {
      const pointLongitude = recyclePoints[index].geometry.coordinates[0];
      const pointLatitude = recyclePoints[index].geometry.coordinates[1];
      const distanceValue = distance(location.latitude, location.longitude, pointLatitude, pointLongitude, "K");

      distances_array[index] = distanceValue;
    });

    setDistances(distances_array);

  }

  const loadPointsAPI = async () => {
    const response = await fetch('https://services.arcgis.com/1dSrzEWVQn5kHHyK/arcgis/rest/services/Amb_Reciclagem/FeatureServer/0/query?where=1%3D1&outFields=*&f=pgeojson');
    const data = await response.json();

    setRecyclePoints(data.features);
  }

  useEffect(() => {
    distances.map((v, i) => {
      setRecyclePoints([...recyclePoints, recyclePoints[i] = {...recyclePoints[i], distance: distances[i]}]);
    });
    // Ordena o array dos pontos de recolha por distância mais próxima
    setRecyclePoints(recyclePoints.sort((a, b) => {
      return a.distance - b.distance;
    }));
  }, [distances])

  useEffect(() => {
    if (category === 'Papel' || category === 'Vidro' || category === 'Plástico') {
      loadPointsAPI();
    }
  }, []);

  useEffect(() => {
    calculateDistances();
  }, [recyclePoints, location]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Container className="cards-list">
        <h3 className="list-title">Pontos de Recolha</h3>
        <Button variant="primary" onClick={handleShow}>Adicionar</Button>
        <CardColumns style={{columnCount: "1"}}>
          {
            recyclePoints.slice(0, 10).map((value, index) => {
              return (
                <PointCard
                  key={index}
                  id={recyclePoints[index].id}
                  name={recyclePoints[index].properties.TPRS_DESC}
                  location={recyclePoints[index].properties.FRE_AB}
                  distance={recyclePoints[index].distance}
                  coords={recyclePoints[index].geometry.coordinates}
                />
              );
            })
          }
        </CardColumns>
      </Container>

      <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Adicionar Ponto de Recolha</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Conhece algum ponto de recolha que não esteja identificado?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Não
            </Button>
            <Button variant="primary" href="/addPointWithMap">Sim, e estou no local</Button>
            <Button variant="primary" href="/addPointForm">Sim, e sei a morada</Button>
          </Modal.Footer>
        </Modal>
    </>
  );
}

export default PointsList;
