import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PointsList from "./PointsList";

const CategoryPage = () => {
  let { selectedCategory } = useParams();

  const [location, setLocation] = useState({});


  // TODO: Confirmar o will unmount
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
      <h1 className="title">{selectedCategory}</h1>
      <PointsList location={location}/>
    </>
  );
}

export default CategoryPage;
