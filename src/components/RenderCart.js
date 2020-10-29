import React from "react";

export default function RenderCart({ cart, removeFromCart, incrementAmount, decrementAmount, navigateTo, PAGE_PRODUCTS }) {
  console.log(cart);

  function totalPriceProduct(index) {
    return (cart[index].price*cart[index].amount)
  }

  let totalPriceCart = cart.reduce(function(prev, current) {
    return prev + +current.price*current.amount
  }, 0);
 
  
  return (
    <div className='cart'>
      <img src='./assets/test.svg' alt='progress'/>
      <h1>My Cart</h1>
      <div className='underlineTitle'></div>
      <div className='products'>
        <div className='container-titles'>
        <div></div>
        <div className='titlesCart'>
          <p>PRODUCTS</p>
        </div>
        <div>
          <p>PRICE</p>
        </div>
        <div>
          <p>QTY</p>
        </div>
        <div>
          <p>TOTAL</p>
        </div>
        <div></div>
        </div>
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
            <button className='buttonInCart' onClick={() => decrementAmount(index)}>-</button>
            <p> { product.amount } </p>
            <button className='buttonInCart' onClick={() => incrementAmount(index)}>+</button>
          </div>
          <div className='total-product-price'> 
            <p>€ { totalPriceProduct(index) } </p>
          </div>
          <div className='delete-product'> 
            <button className='buttonInCart' onClick={ () => removeFromCart(product)}>X</button>
          </div>
      </div>
      ))}
      </div>
      <div className='underlineBottom'></div>
      <div className='checkout'>
        <p>SUBTOTAL: <span className='boldSpan'>€ { totalPriceCart }</span></p>
        <label>
          <input type="checkbox" name="terms" />
            I agree to <span className='italicSpan'>Terms & Conditions</span>
      </label>
      <div className='buttons'>
        <button className='buttonCheckout'>CHECKOUT</button> <br />
        <button className='buttonCheckout' onClick={ () => navigateTo(PAGE_PRODUCTS) }>CONTINUE SHOPPING</button>
      </div>
      
      </div>
      </div>
  );
}