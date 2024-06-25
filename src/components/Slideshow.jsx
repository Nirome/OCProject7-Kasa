import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import chevronLeft from "/src/assets/images/chevron-left.png";
import chevronRight from "/src/assets/images/chevron-right.png";
import NotFound from "../pages/NotFound";

const Slideshow = () => {
  const { id } = useParams();
  const [housing, setHousing] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/housing.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const foundHousing = data.find((item) => item.id === id);
        setHousing(foundHousing);
      });
  }, [id]);

  const handleNext = () => {
    if (housing && housing.pictures) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % housing.pictures.length);
    }
  };

  const handlePrev = () => {
    if (housing && housing.pictures) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + housing.pictures.length) % housing.pictures.length
      );
    }
  };

  if (!housing) {
    return <NotFound />;
  }

  return (
    <div className="slideshow">
      {housing.pictures && housing.pictures.length > 1 ? (
        <div>
            <img
                src={housing.pictures[currentIndex]}
                alt={housing.title}
                className="housing-cover"
            />
            <span className="number">
                {currentIndex + 1}/{housing.pictures.length}
            </span>
        </div>
      ) : (
        <img
          src={housing.cover}
          alt={housing.title}
          className="housing-cover"
        />
      )}
      {housing.pictures && housing.pictures.length > 1 && (
        <>
          <img src={chevronLeft} alt="Flèche gauche" className="arrow-left" onClick={handlePrev}/>
          <img src={chevronRight} className="arrow-right" alt="Flèche droite" onClick={handleNext}/>       
        </>
      )}
    </div>
  );
};

export default Slideshow;