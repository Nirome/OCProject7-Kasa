import React, { useState, useEffect } from "react";
import Card from "./Card";

const Gallery = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("housing.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="gallery">
      {data.map((housing) => (
        <Card key={housing.id} housing={housing} />
      ))}
    </div>
  );
};

export default Gallery;
