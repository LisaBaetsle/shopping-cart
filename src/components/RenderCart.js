import React from "react";

export default function RenderCart({ products, cart, removeFromCart, incrementAmount, decrementAmount }) {
  console.log(cart);

  function totalPriceProduct(index) {
    return (products[index].price*products[index].amount)
  }

  let totalPriceCart = cart.reduce(function(prev, current) {
    return prev + +current.price*current.amount
  }, 0);
 
  
  return (
    <div className='cart'>
      <h1>My Cart</h1>
      <div className='products'>
      {cart.map((product, index) => (
        <div className='product' key={index}>
          <div className='product-image'> 
            <img src={ product.image } alt={ product.name }/>
          </div>
          <div className='product-name'> 
            <p>{ product.name }</p>
          </div>
          <div className='product-price'> 
            <p>€ { product.price }</p>
          </div>
          <div className='product-qty'> 
            <button onClick={() => decrementAmount(index)}>-</button>
            <p> { product.amount } </p>
            <button onClick={() => incrementAmount(index)}>+</button>
          </div>
          <div className='total-product-price'> 
            <p>€ { totalPriceProduct(index) } </p>
          </div>
          <div className='total-product-price'> 
            <button onClick={ () => removeFromCart(product)}>X</button>
          </div>
      </div>
      ))}
      </div>
      <div className='checkout'>
      <p>SUBTOTAL: { totalPriceCart }</p>
      </div>
      </div>
  );
}