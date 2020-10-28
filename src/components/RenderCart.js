import React from "react";

export default function RenderCart({ cart }) {
  console.log(cart);
  
  return (
    <div>
      <h1>My Cart</h1>
      {cart.map((product, index) => (
        <div key={index}>
        <h3>{ product.name }</h3>
        <h4>{ product.price }</h4>
        <img src={ product.image } alt={ product.name }/>

      </div>
      ))}
      </div>
  );
}