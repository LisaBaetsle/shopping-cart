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
     price: '€9.99', 
     image: '',
     amount: 1,
    },
    {name: 'Custom Soap 2',
     price: '€8.99', 
     image: '',
     amount: 1,
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

  function incrementAmount() {
    setCart([ cart.amount + 1])
  }

  function navigateTo(nextPage) {
    setPage(nextPage)
  }

  return (
    <div>
      <header>
        <button onClick={ () => navigateTo(PAGE_CART) }>Go to Cart ({cart.length})</button>
        <button onClick={ () => navigateTo(PAGE_PRODUCTS) }>View products</button>
        <button onClick={ () => incrementAmount }>Add 1</button>
      </header>
      {page === PAGE_PRODUCTS ? <RenderProducts products={products} addToCart={addToCart}/> : null}
      {page === PAGE_CART ? <RenderCart cart={cart} removeFromCart={removeFromCart} /> : null}
    </div>
  );
}

export default App;
