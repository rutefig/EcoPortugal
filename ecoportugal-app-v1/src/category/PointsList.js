import React, { useState, useEffect } from "react";
import { Container, CardColumns, Button, Modal } from "react-bootstrap";
import calculateDistance from "../utils/utils";
import PointCard from "./PointCard";

const PointsList = ({ location, category }) => {
  const [recyclePoints, setRecyclePoints] = useState([]);
  const [distances, setDistances] = useState([]);



  function calculateDistances() {
    let distances_array = [];
    recyclePoints.map((value, index) => {
      const pointLongitude = recyclePoints[index].geometry.coordinates[0];
      const pointLatitude = recyclePoints[index].geometry.coordinates[1];
      const distanceValue = calculateDistance(location.latitude, location.longitude, pointLatitude, pointLongitude, "K");

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
        <div className="clearfix p-2">
          <h3 className="list-title float-left">Pontos de Recolha</h3>
          <Button className="float-right" variant="primary" onClick={handleShow}>Adicionar</Button>
        </div>
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
            <Button variant="primary" href={`/${category}/addPointWithMap`}>Sim, e estou no local</Button>
            <Button variant="primary" href={`/${category}/addPointForm`}>Sim, e sei a morada</Button>
          </Modal.Footer>
        </Modal>
    </>
  );
}

export default PointsList;
