// eslint-disable-next-line no-unused-vars
import React from "react";
import { apartments } from "../data.jsx";

const ProductListComponent = () => {
  return (
    <div className="product-list">
      {apartments.map((apartment) => (
        <div key={apartment.id}>
          <img src={apartment.image} alt="apt image" style={{width: '400px'}}/>
          <h3>{apartment.country}</h3>
          <p>{apartment.distance}</p>
          <p>{apartment.date}</p>
          <p>${apartment.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListComponent;
