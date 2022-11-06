import React from "react";
import "./Products.css";

// Data
import { ProductsData } from "../../Data/Products";

function Products() {
  return (
    <div id="products">
      <div className="ProductHeading">Products</div>
      <div className="Products">
        {ProductsData.map((product, index) => (
          <div key={index} className="Product">
            <div
              style={{
                backgroundImage: `url(${product.image})`,
              }}
              className="ProductImage"
            ></div>
            <div className="ProductContent">
              <div className="ProductName">{product.name}</div>
              <div className="ProductInfo">
                <div className="ProductPrice">Rs. {product.price}</div>
                <a href={product.link} className="ProductLink">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
