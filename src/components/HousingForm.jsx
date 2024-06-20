import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "./Button";
import StarRating from "./StarRating";

const HousingForm = () => {
  const { id } = useParams();
  const [housing, setHousing] = useState(null);

  useEffect(() => {
    fetch("/housing.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const foundHousing = data.find((item) => item.id === id);
        setHousing(foundHousing);
      });
  }, [id]);

  if (!housing) {
    return <div>Logement non trouvé</div>;
  }

  const [firstName, lastName] = housing.host.name.split(" ");

  return (
    <div>
      <Header />
      <div className="housing-details">
        <img
          src={housing.cover}
          alt={housing.title}
          className="housing-cover"
        />
        <div className="housing-content">
          <div className="housing-location">
            <h2>{housing.title}</h2>
            <h3>{housing.location}</h3>
            <div className="tags">
              {housing.tags.map((tag, index) => (
                <p className="tag" key={index}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="housing-host">
            <div className="housing-presentation">
              <h4 className="name">
                <span className="prenom">{firstName}</span>
                <span className="nom">{lastName}</span>
              </h4>
              <img src={housing.host.picture} alt="Photo de l'hôte" />
            </div>
            <StarRating rating={housing.rating} />
          </div>
        </div>
        <div className="housing-button">
          <Button label="Description" content={<p>{housing.description}</p>} />
          <Button
            label="Équipements"
            content={
              <ul>
                {housing.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HousingForm;
