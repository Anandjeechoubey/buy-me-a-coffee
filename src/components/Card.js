import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white from-neutral-600 p-12 rounded-md mb-8 shadow-md">
      {children}
    </div>
  );
};

export default Card;
