import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const AddRecyclePointWithMap = () => {

  const [location, setLocation] = useState({});

  // Conteudo retirado do seguinte link: https://www.youtube.com/watch?v=6WB16wZS61c
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;

    setLocation({ latitude, longitude });
  }

  return (
    <>
      <h1>Add Recycle Point With Location</h1>
      <h3>Latitude: {location.latitude}</h3>
      <h3>longitude: {location.longitude}</h3>
    </>
  );
}

export default AddRecyclePointWithMap;
