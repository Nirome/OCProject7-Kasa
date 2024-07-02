import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ label, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`button-details ${isOpen ? "open" : ""}`}>
      <button className="button" onClick={buttonContent}>
        {label}
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`chevron-icon ${isOpen ? "rotate" : ""}`}
        />
      </button>
        <div className={`content ${isOpen ? "expanded" : ""}`}>{content}</div>
    </div>
  );
};

export default Collapse;
