import React from "react";

export default function RenderProducts({ products, addToCart }) {
  
  return (
    <div>
      <h1>Products</h1>
      {products.map((product, index) => (
        <div key={index}>
        <h3>{ product.name }</h3>
        <h4>{ product.price }</h4>
        <img src={ product.image } alt={ product.name }/>
        <button onClick={ () => addToCart(product)}>Add to Cart</button>
      </div>
      ))}
      </div>
  );
}