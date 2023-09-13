import React from "react";

import product1 from "../Assets/products/placemats.jpg";
import product2 from "../Assets/products/Feature-Table-Linen.jpg";
import product3 from "../Assets/products/napkins.png";
import product4 from "../Assets/products/gloves.jpg";
import product5 from "../Assets/products/aprons.jpg";
import product6 from "../Assets/products/potholders.jpg";

import "../css/Products.css";


function Products() {
  window.scrollTo(0, 0);

  return (
    <div className="products">
      <div className="container">
        <div className="product-head">
          <h3 id="product-id">products page</h3>
          <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          </p>
        </div>
        <div className="sample-image">
          <img src={product1} />
        </div>
        <h3 className="product-list-title" id="product-list">Our List</h3>
        <div className="product-list-flex">
          <div className="product-main">
            <img src={product1} />
            <div className="product-caption">
              <h3 id="dummy">Dummy text</h3>
            </div>
          </div>
          <div className="product-main">
            <img src={product2} />
            <div className="product-caption">
              <h3>dummy text</h3>
            </div>
          </div>
          <div className="product-main">
            <img src={product3} />
            <div className="product-caption">
              <h3>Dumy text</h3>
            </div>
          </div>
        </div>
        <div className="product-list-flex">
          <div className="product-main">
            <img src={product4} />
            <div className="product-caption">
              <h3>Dumy text</h3>
            </div>
          </div>
          <div className="product-main">
            <img src={product5} />
            <div className="product-caption">
              <h3>Dumy text</h3>
            </div>
          </div>
          <div className="product-main">
            <img src={product6} />
            <div className="product-caption">
              <h3>Dumy text</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;



