import React from "react";
import { useParams } from "react-router-dom";

const RecyclePointPage = () => {
  let { selectedCategory, selectedPoint } = useParams();
  return (
    <>
      <h1 className="title">{selectedPoint}</h1>
    </>
  );
}

export default RecyclePointPage;
