import React from "react";

export default function RenderCart({ cart, removeFromCart, incrementAmount, decrementAmount }) {
  console.log(cart);
  
  return (
    <div>
      <h1>My Cart</h1>
      {cart.map((product, index) => (
        <div key={index}>
        <h3>{ product.name }</h3>
        <h4>{ product.price }</h4>
        <img src={ product.image } alt={ product.name }/>
        <button onClick={() => decrementAmount(index)}>-</button>
        <p> { product.amount } </p>
        <button onClick={() => incrementAmount(index)}>+</button>
        <button onClick={ () => removeFromCart(product)}>X</button>
      </div>
      ))}
      </div>
  );
}