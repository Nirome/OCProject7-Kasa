import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-container">
        <div className="banner-about"></div>
        <div className="collapse-about">
          <Collapse
            label="Fiabilité"
            content={
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            }
          />
          <Collapse
            label="Respect"
            content={
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entrainera une exclusion de notre plateforme.
              </p>
            }
          />
          <Collapse
            label="Service"
            content={
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entrainera une exclusion de notre plateforme.
              </p>
            }
          />
          <Collapse
            label="Sécurité"
            content={
              <p>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
