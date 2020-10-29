import React, { useState } from 'react';
import RenderProducts from './components/RenderProducts'
import RenderCart from './components/RenderCart'

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [products] = useState([
    {name: 'Custom Soap 1',
     price: '9.99', 
     image: '',
     amount: 1,
     id: 1,
    },
    {name: 'Custom Soap 2',
     price: '8.99', 
     image: '',
     amount: 1,
     id: 2,
    }
  ])

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(productToRemove) {
    setCart(
      cart.filter((product) => product !== productToRemove)
    )
  }

  function incrementAmount(index) {
    const newItems = [...products];

	  products[index].amount++;

	  setCart(newItems);
  }

  function decrementAmount(index) {
    const newItems = [...products];

	  products[index].amount--;

	  setCart(newItems);
  }

  function navigateTo(nextPage) {
    setPage(nextPage)
  }

  let qtyInCart = cart.reduce(function(prev, current) {
    return prev + +current.amount
  }, 0);

  return (
    <div>
      <header>
        <button onClick={ () => navigateTo(PAGE_CART) }>Go to Cart ({qtyInCart})</button>
        <button onClick={ () => navigateTo(PAGE_PRODUCTS) }>View products</button>
      </header>
      <main>
      {page === PAGE_PRODUCTS ? <RenderProducts products={products} addToCart={addToCart}/> : null}
      {page === PAGE_CART ? <RenderCart products={products} cart={cart} removeFromCart={removeFromCart} incrementAmount={incrementAmount} decrementAmount={decrementAmount}/> : null}
      </main>
    </div>
  );
}

export default App;
