import React from "react";
import { useParams } from "react-router-dom";
import MapContainer from "./MapContainer";

const RecyclePointPage = () => {
  let { selectedCategory, selectedPoint, coordinates } = useParams();
  let coords = coordinates.split(",");

  // https://janosh.dev/blog/google-maps+react-hooks
  function addMarkers(map, point) {
    const marker = new window.google.maps.Marker({
      map,
      position: point.coords,
      label: point.title,
      title: point.title,
    })
    marker.addListener(`click`, () => {
      window.location.href = point.url
    })
  }

  const point = {
    coords: { lat: parseFloat(coords[1]), lng: parseFloat(coords[0]) },
    title: '',
    url: '',
  };

  console.log(point);

  const mapProps = {
    options: { center: { lat: 38.7166700, lng: -9.1333300 }, zoom: 12 },
    onMount: addMarkers,
    onMountProps: point,
  }

  return (
    <>
      <h1 className="title">{selectedPoint}</h1>
      <MapContainer {...mapProps}/>
    </>
  );
}

export default RecyclePointPage;
