import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`star ${value <= rating ? "selected" : ""}`}
        >
           <FontAwesomeIcon icon="fa-solid fa-star" />
        </span>
      ))}
    </div>
  );
};

export default StarRating;
